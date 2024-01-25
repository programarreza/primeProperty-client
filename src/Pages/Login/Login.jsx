import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import useUserInfo from "../../hooks/useUserInfo";

const Login = () => {
  const {user} = useUserInfo()
  const navigate = useNavigate()

  const {
    register,
    // reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    // create user entry in the database
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (res.status === 400) {
      toast.error("Invalid credentials");
    } else {
      toast.success("Login Successfully ")
      const resData = await res.json();
      if (resData?.token) {
        localStorage.setItem("user:token", resData?.token);
        localStorage.setItem("user:details", JSON.stringify(resData?.user));
        if(user.role === "owner"){
          navigate("/owner_dashboard")
        }
      }

    }
  };

  return (
    <div>
      <div className="w-full min-h-screen flex bg-cover bg-center">
        <div className="hero">
          <div className="hero-content flex flex-col md:flex-row  rounded-xl justify-between">
            <div className="card w-1/1  flex-shrink-0 shadow-2xl">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body w-[450px] px-16"
              >
                <h2 className="text-center text-3xl font-bold mt-5">Login</h2>

                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="input input-bordered h-10 mr-5"
                  />
                  {errors.email && (
                    <span className="text-[#006ce1]">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                    })}
                    placeholder="Password"
                    className="input input-bordered h-10 mb-2 mr-5"
                  />

                  {errors.password?.type === "required" && (
                    <p className="text-[#006ce1]">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-[#006ce1]">
                      Password must be 6 Character
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-[#006ce1]">
                      Password must be less den 20 Character
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-[#006ce1]">
                      Password must have one upper case one lower carse, one
                      number and one special character
                    </p>
                  )}
                </div>

                <div className="form-control mt-2">
                  <button
                    type="submit"
                    className="btn   bg-[#61adff] hover:bg-[#006ce1] text-white  "
                  >
                    Login In
                  </button>
                  <p className=" text-center mt-2">
                    Are you new user?{" "}
                    <Link to={"/register"}>
                      <span className="font-semibold text-[#006ce1]">
                        Register Now
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

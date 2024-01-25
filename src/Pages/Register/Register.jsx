import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../../Utils/Utils";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

const Register = () => {
  const axiosLocal = useAxiosLocal();
  const [number, setNumber] = useState("US");
const navigate = useNavigate()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const image = data.image[0];
    const imageData = await imageUpload(image);

    // create user entry in the database
    const userInfo = {
      fullName: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      number: number.value,
      image: imageData?.data?.display_url,
    };
    console.log(userInfo);

    axiosLocal.post("/api/register", userInfo).then((res) => {
      if (res.status === 200) {
        toast.success("Registration Successful");
        reset();
          navigate("/login");
      }
    });
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
                <h2 className="text-center text-3xl font-bold mt-5">Sign Up</h2>
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Full Name"
                    className="input input-bordered h-10 mr-5"
                  />
                  {errors.name && (
                    <span className="text-[#006ce1]">Name is required</span>
                  )}
                </div>

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
                      // TODO: uncomment this validation
                      // pattern:
                      //   /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
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

                <div className=" ">
                  <PhoneInput
                    country={"bd"}
                    //   value={number}
                    onChange={(value) => setNumber({ value })}
                  />
                </div>

                <div className="form-control">
                  <label className="label"></label>

                  <select
                    className="border py-2 rounded-md mr-5"
                    {...register("role", { required: true })}
                  >
                    <option disabled selected required>
                      Select Role
                    </option>
                    <option value="owner">House Owner</option>
                    <option value="renter">House Renter</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="image" className="block mb-2 text-sm">
                    Upload Profile Image:
                  </label>
                  <input
                    {...register("image", { required: true })}
                    required
                    type="file"
                    id="image"
                    accept="image/*"
                  />
                </div>

                <div className="form-control mt-2">
                  <button
                    type="submit"
                    className="btn   bg-[#61adff] hover:bg-[#006ce1] text-white  "
                  >
                    Sign Up
                  </button>
                  <p className=" text-center mt-2">
                    Already registered?{" "}
                    <Link to={"/login"}>
                      <span className="font-semibold text-[#006ce1]">
                        login Now
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

export default Register;

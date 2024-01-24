import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { imageUpload } from "../../Utils/Utils";
import useAxiosLocal from "../../hooks/useAxiosLocal";

const OwnerDashboard = () => {
  const axiosLocal = useAxiosLocal();



  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const image = data.image[0];
    console.log(image);

    const imageData = await imageUpload(image);

    const roomInfo = {
      houseName: data.name,
      address: data.address,
      city: data.city,
      image: imageData?.data?.display_url,
      bedroom: data.bedroom,
      room_size: data.room_size,
      availability: data.availability,
      rent: data.rent,
      number: data.number,
      description: data.description,
    };
    console.log(roomInfo);

    axiosLocal
      .post("/api/house", roomInfo)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Room Added Successful");
          reset();
          //   navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div>
      <div className="flex justify-end">
        <label
          htmlFor="my_modal_6"
          className="btn rounded-md border-none opacity-80 hover:opacity-100  bg-gradient-to-r from-[#D32053] to-[#460BC6] text-white"
        >
          Add Home
        </label>
      </div>
      {/* Modal */}
      <div className="w-full ">
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box relative p-6">
            <label
              htmlFor="my_modal_6"
              className="absolute top-0 right-0 p-4 cursor-pointer "
            >
              <span className="text-xl ">
                <AiOutlineCloseCircle size={30} />
              </span>
            </label>

            <form onSubmit={handleSubmit(onSubmit)} className=" w-full ">
              <div className="grid grid-cols-2 gap-5">
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="House Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-[#D1A054]">
                      House Name is required
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    {...register("address", { required: true })}
                    placeholder="Address"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-[#D1A054]">Address is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label"></label>
                  <select
                    className="border py-3 rounded-md"
                    {...register("city", { required: true })}
                  >
                    <option disabled selected required>
                      city
                    </option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Noakhali">Noakhali</option>
                    <option value="khulna">khulna</option>
                    <option value="Gazipur">Gazipur</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="image" className="block mb-2 text-sm">
                    Select House Image:
                  </label>
                  <input
                    {...register("image", { required: true })}
                    required
                    type="file"
                    id="image"
                    accept="image/*"
                    className="border w-full rounded-lg"
                  />
                  {errors.image && (
                    <span className="text-[#D1A054]">
                      House Image is required
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    {...register("bedroom", { required: true })}
                    placeholder="Bedroom"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-[#D1A054]">bedroom is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    {...register("room_size", { required: true })}
                    placeholder="room size"
                    className="input input-bordered"
                  />
                  {errors.room_size && (
                    <span className="text-[#D1A054]">room size</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Availability Date </span>
                  </label>
                  <input
                    className="py-3 rounded-lg px-1 border"
                    type="date"
                    {...register("availability", { required: true })}
                  />
                  {errors.dob && (
                    <span className="text-[#D1A054]">
                      Availability Date is required
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    {...register("rent", { required: true })}
                    placeholder="rent per month "
                    className="input input-bordered mt-5"
                  />
                  {errors.room_size && (
                    <span className="text-[#D1A054]">rent per month</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    {...register("number", { required: true })}
                    placeholder="phone number"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-[#D1A054]">number is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    {...register("description", { required: true })}
                    placeholder="description"
                    className="input input-bordered"
                  />
                  {errors.room_size && (
                    <span className="text-[#D1A054]">
                      description is required
                    </span>
                  )}
                </div>
              </div>

              <div className="form-control mt-12 w-fit mx-auto block">
                <button
                  type="submit"
                  className="btn mr-12 opacity-80 hover:opacity-100 bg-white bg-gradient-to-r from-[#D32053] to-[#460BC6] text-white"
                >
                  Add Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* all houses */}
    </div>
  );
};

export default OwnerDashboard;

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { imageUpload } from "../../Utils/Utils";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import useUserInfo from "../../hooks/useUserInfo";
import { useEffect, useState } from "react";
import AddHouse from "./AddHouse";

const OwnerDashboard = () => {
  const axiosLocal = useAxiosLocal();
  const { user } = useUserInfo();
  const [houses, setHouses] = useState([]);
  console.log({ user });


  useEffect(() => {
    axiosLocal
      .get(`/api/house/${user?.email}`)
      .then((res) => {
        setHouses(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosLocal, user?.email]);

  return (
    <div className="flex mx-2 h-screen">
      <div className="w-[20%] border">
        {/* owner profile */}
        <div className="bg-[#010313] text-white h-full pt-8">
          <div className="avatar flex justify-center">
            <div className="w-20 rounded-full">
              <img src={user?.image} />
            </div>
          </div>
          <div className="text-center space-y-1.5 mt-4">
            <h2 className="text-2xl"> {user.fullName}</h2>
            <h2> {user.email}</h2>
            <h2>+{user.number}</h2>
            <h2>Role: {user.role}</h2>

            {/* add home modal */}
            <AddHouse />
            <label
              htmlFor="my_modal_6"
              className="btn rounded-md border-none opacity-80 hover:opacity-100  bg-gradient-to-r from-[#D32053] to-[#460BC6] text-white"
            >
              Add Home
            </label>
          </div>
        </div>
      </div>

      {/* all houses */}
      <div className="w-[75%] border">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 py-12">
          {houses?.map((house) => (
            <>
              <div className="card card-compact  bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-[300px] w-full "
                    src={house?.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{house?.houseName}</h2>
                  <p>{house.address}</p>
                  <div className="card-actions justify-end">
                    <p>Room Size: {house?.room_size}Sq</p>
                    <p>Bedroom: {house?.bedroom}</p>
                    <p>Rent Per Month: {house?.rent}৳</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;

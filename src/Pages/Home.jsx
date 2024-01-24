import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { axiosLocal } from "../hooks/useAxiosLocal";

const Home = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const res = await axiosLocal.get("/api/houses");
      setHouses(res.data);
    };
    fetchHouses();
  }, []);

  return (
    <div>
      <Banner />

      <div className="grid grid-cols-3 gap-8 p-12">
        {houses.map((house) => (
          <>
            <div className="card card-compact  bg-base-100 shadow-xl">
              <figure>
                <img src={house?.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{house?.houseName}</h2>
                <p>{house.address}</p>
                <div className="card-actions justify-end">
                  <p>Room Size: {house?.room_size}</p>
                  <p>Bedroom: {house?.bedroom}</p>
                  <p>Rent Per Month: {house?.rent}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;

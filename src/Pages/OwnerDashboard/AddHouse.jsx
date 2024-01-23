// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";


const AddHouse = () => {



//   const handleSingleData = async (id) => {
    
//   };


    return (

        <div className="py-12 h-screen shadow-xl rounded-lg my-12 " data-aos="fade-left">
          <h2 className="text-4xl text-center uppercase font-semibold">
            My custom request{" "}
          </h2>

          <div>
            <div className="overflow-x-auto ">
              <table className="table text-center my-12">
                {/* head */}
                <thead>
                  <tr className="bg-[#D1A054]  text-white text-xl">
                    <th>SL.</th>
                    <th>Asset Name</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                
                </tbody>
              </table>
            </div>
          </div>
          {/* Modal */}
          {/* <Modal modalId={"my_modal_6"} asset={asset} /> */}
        </div>
    );
};

export default AddHouse;
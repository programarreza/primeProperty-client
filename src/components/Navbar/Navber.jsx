import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLink";


const Navbar = () => {
 

  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
         
          <Link to="/" className=" text-xl">
            <img
              className="w-20"
              src="https://i.postimg.cc/RFRx86f7/Layer-601321.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavbarLinks />
          </ul>
        </div>
        <div className="navbar-end ">
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
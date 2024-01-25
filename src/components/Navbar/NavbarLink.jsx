import { NavLink } from "react-router-dom";

const NavbarLinks = () => {
  const user = true;

  return (
    <div className="flex gap-4">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#D1A054] underline" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/owner_dashboard"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#D1A054] underline" : ""
        }
      >
        Owner Dashboard 
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#D1A054] underline" : ""
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#D1A054] underline" : ""
        }
      >
        Login
      </NavLink>
    </div>
  );
};

export default NavbarLinks;

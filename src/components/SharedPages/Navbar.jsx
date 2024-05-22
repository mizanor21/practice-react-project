import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.config";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const navItem = (
    <>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>

      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li>{user && <NavLink to={"/dashboard"}>Dashboard</NavLink>}</li>
    </>
  );

  return (
    <div className="navbar glass font-serif sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-800 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <NavLink to={"/"} className="btn btn-ghost text-xl">
          daisyUI
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {loading ? (
                  <span className="loading loading-dots loading-sm"></span>
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-800 rounded-box w-52"
            >
              <li>
                <NavLink to={"/profile"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/settings"}>Settings</NavLink>
              </li>
              <li>
                <NavLink onClick={logout} to={"/"}>
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to={"/signin"}>Signin</NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;

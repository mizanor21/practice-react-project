import { signOut } from "firebase/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../../firebase.config";

const Dashboard = () => {
  const logout = () => {
    signOut(auth);
  };

  const linkClasses = ({ isActive }) =>
    isActive ? "text-blue-500 font-bold" : "text-black";

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-slate-200">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-400 text-base-content flex flex-col justify-between">
          {/* Sidebar content here */}
          <div className="flex menu flex-col gap-5">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/dashboard/add-product" className={linkClasses}>
              Add Product
            </NavLink>
            <NavLink to="/dashboard/all-product" className={linkClasses}>
              All Product
            </NavLink>
          </div>
          <div>
            <NavLink onClick={logout} to="/" className="btn w-full">
              Logout
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

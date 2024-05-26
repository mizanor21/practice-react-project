import { signOut } from "firebase/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../../firebase.config";

const Dashboard = () => {
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
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
          <div className="flex flex-col gap-5">
            <NavLink to={"/dashboard"} className={"btn"}>
              Home
            </NavLink>
            <NavLink to={"/dashboard/add-product"} className={"btn"}>
              Add Product
            </NavLink>
            <NavLink to={"/dashboard/all-product"} className={"btn"}>
              All Product
            </NavLink>
          </div>
          <div className="">
            <li>
              <NavLink onClick={logout} to={"/"} className={"btn"}>
                Logout
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

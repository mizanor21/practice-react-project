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
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
          {/* Sidebar content here */}
          <div className="">
            <li>
              <NavLink to={"/dashboard"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/add-product"}>Add Product</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/all-product"}>All Product</NavLink>
            </li>
          </div>
          <div className="">
            <li>
              <NavLink onClick={logout} to={"/"}>
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

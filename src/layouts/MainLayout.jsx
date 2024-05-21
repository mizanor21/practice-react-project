import { Outlet } from "react-router-dom";
import Navbar from "../components/SharedPages/Navbar";
import Footer from "../components/SharedPages/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {location?.pathname === "/" && <Footer></Footer>}
    </div>
  );
};

export default Main;

import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { ToastContainer } from "react-toastify";
// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// import Loading from "../components/Loading";

const MainLayout = () => {
  // const { loading } = useContext(AuthContext);
  return (
    <div className="mx-auto container">
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;

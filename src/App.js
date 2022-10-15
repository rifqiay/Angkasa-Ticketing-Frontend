import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Home from "../src/pages/home/Home";
import Login from "../src/pages/auth/login/Login";
import PageNotFound from "../src/pages/PageNotFound/PageNotFound.jsx";
import Register from "../src/pages/auth/register/Register";

// components
import ScrollToTop from "./component/ScrollToTop";
import useWindowDimensions from "./component/WindowsSize";
import PageDeviceNotSupported from "./component/PageDeviceNotSupported";
import Footer from "../src/component/footer";
import Navbar from "../src/component/navbar";

//modules
import { ToastContainer } from "react-toastify";

function App() {
  let location = useLocation();

  const { height, width } = useWindowDimensions();
  return (
    <ScrollToTop>
      {width >= 576 ? (
        location.pathname === "/login" ||
        location.pathname === "/register" ? null : (
          <Navbar />
        )
      ) : null}

      {width >= 576 ? (
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />

          <Route path="*" element={<PageNotFound />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<PageDeviceNotSupported />} />
        </Routes>
      )}
      <ToastContainer />
      {width >= 576 ? (
        location.pathname === "/login" ||
        location.pathname === "/register" ? null : (
          <Footer />
        )
      ) : null}
    </ScrollToTop>
  );
}

export default App;

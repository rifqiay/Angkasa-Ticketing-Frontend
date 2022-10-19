import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Home from "../src/pages/home/Home";
import Login from "../src/pages/auth/login/Login";
import PageNotFound from "../src/pages/PageNotFound/PageNotFound.jsx";
import Register from "../src/pages/auth/register/Register";
import Mybooking from "../src/pages/my-booking/Mybooking";
import BookingDetail from "../src/pages/booking-detail/BookingDetail";
import SearchFlight from "./pages/search-result/SearchResult";
import FlightDetail from "./pages/flightDetail/FlightDetail";
import Profile from "../src/pages/profile/Profile.jsx";
import ScrollToTop from "./component/ScrollToTop";
import useWindowDimensions from "./component/WindowsSize";
import PageDeviceNotSupported from "./component/PageDeviceNotSupported";
import Footer from "../src/components/footer/Footer";
import Navbar from "../src/components/navbar/Navbar";

//modules
import { ToastContainer } from "react-toastify";

function App() {
  let location = useLocation();

  const { height, width } = useWindowDimensions();
  return (
    <ScrollToTop>
      {width >= 350 ? (
        location.pathname === "/login" ||
        location.pathname === "/register" ? null : (
          <Navbar />
        )
      ) : null}
      {width >= 350 ? (
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />

          <Route path="*" element={<PageNotFound />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-booking" element={<Mybooking />} />
          <Route path="/booking/:id" element={<BookingDetail />} />
          <Route path="/search" element={<SearchFlight />} />
          <Route path="/detail/:id" element={<FlightDetail />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<PageDeviceNotSupported />} />
        </Routes>
      )}
      <ToastContainer />
      {width >= 350 ? (
        location.pathname === "/login" ||
        location.pathname === "/register" ? null : (
          <Footer />
        )
      ) : null}
    </ScrollToTop>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Home from "../src/pages/home/Home";
import Login from "../src/pages/auth/login/Login";
import PageNotFound from "../src/pages/PageNotFound/PageNotFound.jsx";
import Register from "../src/pages/auth/register/Register";
import SearchFlight from "./pages/search-result/SearchResult";
import FlightDetail from "./pages/flightDetail/FlightDetail";
import ScrollToTop from "./component/ScrollToTop";
import useWindowDimensions from "./component/WindowsSize";
import PageDeviceNotSupported from "./component/PageDeviceNotSupported";

//modules
import { ToastContainer } from "react-toastify";

function App() {
  let location = useLocation();

  const { height, width } = useWindowDimensions();
  return (
    <ScrollToTop>
      {width >= 350 ? (
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />

          <Route path="*" element={<PageNotFound />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchFlight />} />
          <Route path="/detail/:id" element={<FlightDetail />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<PageDeviceNotSupported />} />
        </Routes>
      )}
      <ToastContainer />
    </ScrollToTop>
  );
}

export default App;

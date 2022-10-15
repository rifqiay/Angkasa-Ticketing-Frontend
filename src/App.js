import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Login from "../src/pages/auth/login/Login";
import Register from "../src/pages/auth/register/Register";
import Mybooking from "../src/pages/my-booking/Mybooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-booking" element={<Mybooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

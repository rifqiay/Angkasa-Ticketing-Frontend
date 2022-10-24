import React from "react";
import BeforeLogin from "../navbar_before_login/BeforeLogin";
import AfterLogin from "../navbar_after_login/AfterLogin";

const Navbar = () => {
  const token = localStorage.getItem("@acc_token");

  return <div>{token ? <AfterLogin /> : <BeforeLogin />}</div>;
};

export default Navbar;

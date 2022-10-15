import React from "react";

const Button = ({ title, type, className, style, onClick }) => {
  return (
    <button type={type} className={className} style={style} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

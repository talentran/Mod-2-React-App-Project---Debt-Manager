import React from "react";
import "../App.css";

const Button = ({ text, color, onClick }) => (
  <button className={`${color}-btn`} onClick={onClick}>
    {text}
  </button>
);

export default Button;

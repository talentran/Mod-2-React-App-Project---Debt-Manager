import React from "react";

const Input = ({ placeholder, onChange, type }) => (
  <input placeholder={placeholder} onChange={onChange} type={type} />
);

export default Input;

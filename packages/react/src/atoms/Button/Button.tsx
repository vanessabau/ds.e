import React from "react";
// import "./Button.css";
export interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="dse-button__container" id="dse-button__container">
      I am a {label || "label"}
    </button>
  );
};

export default Button;

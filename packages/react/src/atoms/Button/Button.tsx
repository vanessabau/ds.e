import React from "react";

export interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <div>I am a {label || "label"}</div>;
};

export default Button;

import React from "react";

interface NewButtonProps {
  label: string;
}

const NewButton: React.FunctionComponent<NewButtonProps> = ({ label }) => {
  return <div className="dse-button-container">{label}</div>;
};

export default NewButton;

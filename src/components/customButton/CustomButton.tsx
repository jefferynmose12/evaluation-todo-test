import React, { memo } from "react";
import { CustomButtonProps } from "../../type";
import './CustomButton.css'

const CustomButton = ({ title, customStyles, onClick, type }: CustomButtonProps) => {
  return (
    <button type={type} style={customStyles} className="customBtn" onClick={onClick}>
      {title}
    </button>
  );
};

export default memo(CustomButton);

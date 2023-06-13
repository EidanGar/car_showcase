"use client";

import React from "react";
import Image from "next/image";

const CustomButton: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => {
  return (
    <button {...{ ...props, className: `custom-btn ${props?.className}` }}>
      {props?.value ?? props.children}
    </button>
  );
};

export default CustomButton;

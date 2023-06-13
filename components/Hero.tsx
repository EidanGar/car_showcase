"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car — quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless bookin
          process.
        </p>
        <CustomButton
          value="Explore Cars"
          className="bg-primary-blue text-white rounded-full mt-10"
          onClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

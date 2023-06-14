"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { FaAngleRight } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const heroButtonClass = "gap-2 border-2 shadow-lg text-white px-7 py-4";

  return (
    <div className="hero bg-primary-grey mt-8">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car — quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless bookin
          process.
        </p>
        <div className="flex sm:flex-row flex-col gap-5 items-center mt-10 w-full">
          <CustomButton
            className={`${heroButtonClass} bg-primary-blue border-primary-blue hover:opacity-80`}
            onClick={handleScroll}
          >
            <span>Explore Cars</span>
            <BsCheckCircleFill className="h-4" />
          </CustomButton>
          <CustomButton
            className={`${heroButtonClass} bg-black border-black hover:bg-white hover:text-black`}
          >
            <span>Learn More</span>
            <FaAngleRight className="h-4" />
          </CustomButton>
        </div>
      </div>
      <div className="hero__image-container">
        <div className="hero__image overlay">
          <Image
            src="/hero.png"
            alt="Hero car"
            fill
            className="object-contain"
          />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

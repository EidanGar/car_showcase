import Link from "next/link";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <header className="w-full shadow bg-white absolute z-10 py-7 px-8">
      <nav className="max-w-[1440px] justify-center mx-auto flex sm:flex-row flex-col sm:justify-start items-center gap-4 whitespace-nowrap">
        <Link href="/" className="flex justify-center items-center">
          <h1 className="text-primary-blue hover:opacity-70 duration-300 text-3xl font-bold">
            RIDEROVER
          </h1>
        </Link>
        <SearchBar />
        <div className="flex items-center sm:ml-auto gap-9">
          <CustomButton
            value="Sign in"
            className="text-black hover:opacity-70 transition-opacity duration-300 font-semibold"
          />
          <CustomButton
            value="Register"
            className="text-white font-bold bg-primary-blue hover:opacity-80 transition-all duration-300 rounded-md px-7 py-3"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<String>("");

  const updateSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setSearchQuery(value);
  };

  return (
    <div className="flex focus-within:border-primary-blue py-[0.475rem] px-3 gap-2 items-center justify-start w-full border-[1px] rounded-full max-w-[500px] duration-300">
      <GoSearch />
      <input
        type="text"
        onChange={updateSearchQuery}
        className="outline-none"
        placeholder="Search car here..."
      />
    </div>
  );
};

export default SearchBar;

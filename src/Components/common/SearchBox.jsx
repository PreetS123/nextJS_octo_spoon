"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router= useRouter();
  const handleSubmit= (e)=>{
   e.preventDefault();
   router.push(`/search/${search}`);
  }
  return (
    <form 
    className="flex justify-between px-5 max-w-6xl mx-auto"
    onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keyword..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button disabled={search === ''} className="text-amber-600">Search</button>
    </form>
  );
};

export default SearchBox;

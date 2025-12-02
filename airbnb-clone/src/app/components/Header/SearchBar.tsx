"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar() {
  const [location, setLocation] = useState("");

  return (
    <div className="w-full flex items-center bg-white border border-gray-200 rounded-full shadow-sm gap-3 transition-all px-4 py-2 sm:px-5 sm:py-2 md:py-3 md:px-6 md:max-w-xl">
      <input type="text" placeholder="Inicie sua busca" value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1 outline-none text-sm placeholder:text-gray-500 md:text-base"
      />

      <button
        className="flex items-center justify-center h-8 w-8 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition md:h-10 md:w-10">
        <MagnifyingGlassIcon className="h-4 w-4 md:h-5 md:w-5" />
      </button>
    </div>
  );
}



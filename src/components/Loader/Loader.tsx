import React from "react";
import { MoonLoader } from "react-spinners";
import "tailwindcss/tailwind.css"; // Make sure you have Tailwind CSS installed and imported

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
      <MoonLoader
        color="blue"
        size={80}
        className="block mx-auto border-blue-500 bg-transparent"
      />
    </div>
  );
}

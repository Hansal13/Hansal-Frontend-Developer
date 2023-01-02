import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black">
      <nav>
        <Link
          className="flex justify-center text-center text-white py-5"
          to="/"
        >
          Space
        </Link>
      </nav>
    </header>
  );
}

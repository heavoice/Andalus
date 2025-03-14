"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaArrowCircleRight, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full top-0 p-5 fixed bg-transparent z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-black ">
        {/* Logo */}
        <div className="text-black flex flex-row gap-4">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={150} height={150} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row gap-4 font-secular text-[#E9AD19] text-lg">
          <Link href="/" className="px-4 py-2">
            About
          </Link>
          <Link href="/" className="px-4 py-2">
            Product
          </Link>
          <Link
            href="/"
            className="bg-[#E9AD19] text-black px-4 py-2 rounded-full flex flex-row"
          >
            Order Now
            <FaArrowCircleRight className="ml-2 mt-1" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#E9AD19] text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full transition-all duration-200 font-secular shadow-lg flex flex-col items-center py-4 space-y-4 bg-black">
          <Link
            href="/"
            className="text-[#E9AD19] text-lg"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/"
            className="text-[#E9AD19] text-lg"
            onClick={() => setIsOpen(false)}
          >
            Product
          </Link>
          <Link
            href="/"
            className="bg-[#E9AD19] text-black px-6 py-2 rounded-full flex items-center"
            onClick={() => setIsOpen(false)}
          >
            Order Now
            <FaArrowCircleRight className="ml-2 mt-1" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaCaretRight,
  FaRegCommentDots,
} from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[rgb(233,173,25)] text-black w-full h-auto flex flex-col p-12">
      <div className="max-w-7xl w-full mx-auto justify-between items-center">
        <div className="flex flex-col xs:flex-row justify-between md:items-center ">
          <Image
            className="w-full max-w-44"
            src="/logo.svg"
            alt="logo"
            width={112}
            height={36}
          />

          <div className="flex-row flex gap-2 sm:gap-4 text-2xl w-fit bg-black p-4  text-[rgb(233,173,25)] rounded-full sm:ml-0 ">
            <FaFacebook />
            <FaInstagram />
            <FaTiktok />
            <FaWhatsapp />
            <SiShopee />
          </div>
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Grid 1 (Paling Kiri) */}
        <div className="text-3xl font-secular ">
          Quick Links
          <div className="grid grid-cols-2 mt-4 gap-2">
            <div className="text-base font-medium flex items-center font-didact">
              <FaCaretRight className="mt-1" />
              <Link className="ml-1 " href="/">
                Home
              </Link>
            </div>
            <div className="text-base font-medium flex items-center font-didact">
              <FaCaretRight className="mt-1" />
              <Link className="ml-1" href="/">
                About
              </Link>
            </div>
            <div className="text-base font-medium flex items-center font-didact">
              <FaCaretRight className="mt-1" />
              <Link className="ml-1" href="/">
                Product
              </Link>
            </div>
            <div className="text-base font-medium flex items-center font-didact">
              <FaCaretRight className="mt-1" />
              <Link className="ml-1" href="/">
                Order Now
              </Link>
            </div>
          </div>
        </div>

        {/* Grid 2 (Tengah) */}
        <div className="font-secular text-3xl">
          Contact Us
          <div className="grid grid-cols-1 mt-4 gap-2">
            <div className="text-base font-medium flex items-center font-didact">
              <FaLocationDot className="mt-1 text-3xl" />
              <p className="ml-2 ">
                Jl. Nasional III, Rancagoong, Kec. Cilaku, Kabupaten Cianjur,
                Jawa Barat 43285
              </p>
            </div>
            <div className="text-base font-medium flex items-center font-didact">
              <FaWhatsapp className="mt-1 text-3xl" />
              <p className="ml-2 ">+62 857-7266-5865</p>
            </div>
            <div className="text-base font-medium flex items-center font-didact">
              <IoMail className="mt-1 text-3xl" />
              <p className="ml-2 ">andalus.rtg@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Grid 3 (Paling Kanan) */}
        <div className="font-secular text-3xl">
          Remain Update
          <div className="grid grid-cols-1 mt-4 gap-2">
            <div className="flex items-center p-2 bg-black ">
              <FaRegCommentDots className="text-[rgb(233,173,25)] mr-2 text-xl" />
              <input
                className="text-[rgb(233,173,25)] font-didact text-base font-medium bg-black placeholder:text-[rgb(233,173,25)] outline-none"
                type="text"
                placeholder="Masukkan pesan"
              />
            </div>

            <button className="w-fit font-didact text-base font-medium bg-black text-[rgb(233,173,25)] p-2 ">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="justify-between items-center flex flex-col sm:flex-row max-w-7xl w-full mx-auto mt-6 text-base">
        <p>@2025. All Right Reserved.</p>
        <p>Designed by Heavoice</p>
      </div>
    </div>
  );
};

export default Footer;

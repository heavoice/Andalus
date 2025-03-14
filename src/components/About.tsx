"use client";

import Image from "next/image";
import { FaArrowCircleRight, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black h-auto w-full">
      {/* Left Side (Yellow Background on md+ screens) */}
      <div className="hidden md:flex flex-col items-center md:items-start justify-center text-center md:text-left md:w-1/2 h-screen bg-[#E9AD19] rounded-r-3xl px-6 md:px-12 py-10">
        <div className="mx-auto">
          <Image src="/rtg.png" alt="brand" width={333} height={73} />
          <p className="mt-3 text-lg max-w-md text-[#E9AD19] md:text-black">
            Sebuah apparel clothing store yang tidak hanya menghadirkan busana,
            tetapi juga menanamkan nilai, sejarah, dan kebanggaan dalam setiap
            helai kain yang dirancang dengan penuh makna.
          </p>

          {/* Button */}
          <button className="p-4 text-[#E9AD19] bg-black w-fit rounded-full flex items-center gap-2 text-xl mt-5">
            Explore More
            <FaArrowCircleRight className="text-2xl" />
          </button>

          {/* Social Icons */}
          <div className="flex flex-row text-4xl gap-4 mt-10">
            <FaInstagram />
            <FaWhatsapp />
            <SiShopee />
          </div>
        </div>
      </div>

      {/* Visible on Small Screens (without yellow background) */}
      <div className="flex md:hidden flex-col px-6 py-10 mt-20 h-auto justify-center ">
        <Image src="/rtg-orange.png" alt="brand" width={333} height={73} />
        <p className="mt-3 text-lg max-w-md text-[#E9AD19]">
          Sebuah apparel clothing store yang tidak hanya menghadirkan busana,
          tetapi juga menanamkan nilai, sejarah, dan kebanggaan dalam setiap
          helai kain yang dirancang dengan penuh makna.
        </p>

        {/* Button */}
        <button className="p-4 text-black bg-[#E9AD19] w-fit rounded-full flex items-center gap-2 text-xl mt-5">
          Explore More
          <FaArrowCircleRight className="text-2xl" />
        </button>

        {/* Social Icons */}
        <div className="flex flex-row text-4xl gap-4 mt-10 text-[#E9AD19]">
          <FaInstagram />
          <FaWhatsapp />
          <SiShopee />
        </div>
      </div>

      {/* Right Side (Image Section) */}
      <div className="w-full md:w-1/2 justify-center items-center p-5 mt-10 flex">
        <Image src="/ba.png" alt="brand" width={426} height={540} />
      </div>
    </div>
  );
};

export default About;

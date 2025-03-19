"use client";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col md:flex-row p-12 h-auto w-full bg-black">
      <div className="md:flex-row flex-col flex items-center justify-center mx-auto w-full max-w-5xl md:gap-8 lg:gap-32 mt-20 mb-20 xs:mt-40 xs:mb-40">
        <Image
          className="border-2 border-[#E9AD19] rounded-full"
          src="/logo-only.svg"
          alt="logo-only"
          width={374}
          height={374}
        />
        <div className="w-full flex flex-col xxs:mt-10 md:mt-0">
          <Image src="/about.svg" alt="about-text" width={138} height={75} />
          {isOpen && (
            <motion.p
              initial={{ opacity: 0, scale: 1, y: -20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-[#E9AD19] md:text-xl lg:text-3xl"
            >
              Sebuah apparel clothing store yang tidak hanya menghadirkan
              busana, tetapi juga menanamkan nilai, sejarah, dan kebanggaan
              dalam setiap helai kain yang dirancang penuh makna.
            </motion.p>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full text-black bg-[#E9AD19] w-fit p-4 flex items-center mt-5 font-secular"
          >
            {isOpen ? "Close Description" : "Open Description"}
            <FaArrowCircleRight className="mb-1 ml-2 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

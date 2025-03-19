"use client";
import Image from "next/image";

const About = () => {
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
          <p className="text-[#E9AD19] md:text-xl lg:text-3xl">
            Sebuah apparel clothing store yang tidak hanya menghadirkan busana,
            tetapi juga menanamkan nilai, sejarah, dan kebanggaan dalam setiap
            helai kain yang dirancang dengan penuh makna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

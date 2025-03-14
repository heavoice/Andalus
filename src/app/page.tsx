import Image from "next/image";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Feed from "@/components/Feed";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <About />
      {/* <Feed /> */}
    </>
  );
}

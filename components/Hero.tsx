import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="flex justify-around items-start">
      <div>
        <h2 className="text-lg font-bold">Pratham | Full Stack Developer</h2>
        <div className="w-50 h-1 my-2 bg-white"></div>
        <p className="text-md mb-4">
          🚀 Passionate Full Stack Developer with a strong focus <br/> on building
          robust and scalable applications. I love <br/> working on full-stack
          projects, tackling complex challenges, <br/> and delivering high-quality
          solutions. 💡
        </p>
        <Link
          href={"mailto:mehtapratham49@gmail.com"}
          className="px-2 py-2 mt-2 w-fit flex justify-center items-center space-x-2  hover:bg-[#292929] border border-r-0 border-b-0 border-zinc-600 bg-[#000000] text-white transition duration-500 font-bold text-sm shadow-[1px_1px_rgba(80,80,80),1px_1px_rgba(80,80,80),3px_3px_rgba(80,80,80),4px_4px_rgba(80,80,80)] cursor-pointer"
        >
          <FaArrowRight />
          <p>Open for Freelance</p>
        </Link>
      </div>
      <div>
        <div className="rounded overflow-hidden hover:scale-110 focus-within:scale-110 transition-transform duration-300">
          <Image
            src={"/myphoto.jpg"}
            alt="profile"
            width={250}
            height={250}
            tabIndex={0}
            className="outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

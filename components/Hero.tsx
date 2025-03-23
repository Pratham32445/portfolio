import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-around items-start">
      <div>
        <h2 className="text-lg font-bold">Pratham | Full Stack Developer</h2>
        <div className="w-50 h-1 my-2 bg-white"></div>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Velit, obcaecati? Soluta praesentium <br/> sapiente ipsum, aut tempora aspernatur qui rerum saepe!
        </p>
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

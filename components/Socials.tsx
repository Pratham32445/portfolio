"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const socialLinks = [
  {
    link: "https://github.com/Pratham32445",
    icon: "/github.svg",
    name: "Github",
  },
  { link: "https://x.com/sheriy3583", icon: "/twitter.svg", name: "Twitter" },
  {
    link: "https://www.linkedin.com/in/itsprathammehta/",
    icon: "/linkedin.svg",
    name: "Linkedin",
  },
  {
    link: "https://peerlist.io/usernam",
    icon: "/peerlist.svg",
    name: "Peerlist",
  },
  {
    link: "mailto:mehtapratham49@gmail.com",
    icon: "/email.svg",
    name: "Email",
  },
];

const Socials = () => {
  return (
    <div className="mt-16 md:mt-28 px-4">
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
        {socialLinks.map(({ link, icon, name }, idx) => (
          <React.Fragment key={idx}>
            <Link href={link}>
              <div className="px-2 py-2 w-full min-w-[90px] md:min-w-[106px] lg:w-32 flex justify-center items-center space-x-1 md:space-x-2 hover:bg-[#292929] border border-r-0 border-b-0 border-zinc-600 bg-[#000000] text-white transition duration-500 font-bold text-xs md:text-sm shadow-[1px_1px_rgba(80,80,80),1px_1px_rgba(80,80,80),3px_3px_rgba(80,80,80),4px_4px_rgba(80,80,80)]">
                <Image src={icon} width={16} height={16} alt={`${name} icon`} className="md:w-5 md:h-5" />
                <p>{name}</p>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Socials;
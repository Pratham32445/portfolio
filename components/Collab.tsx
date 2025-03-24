import React from "react";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const SocialLinks = [
  {
    link: "https://github.com/Pratham32445",
    icon: <FaGithub />,
    title: "Github",
  },
  {
    link: "https://x.com/sheriy3583",
    icon: <FaXTwitter />,
    title: "twitter",
  },
  {
    link: "https://www.linkedin.com/in/itsprathammehta/",
    icon: <FaLinkedin />,
    title: "Linkedin",
  },
];

const Collab = () => {
  return (
    <div className="flex mb-10 flex-col justify-center items-center">
      <h2 className="text-4xl">Let‘s Collaborate</h2>
      <div className="w-1/2 h-1 bg-neutral-500 my-4"></div>
      <p className="text-xs text-neutral-500">
        Hey there! Want to collaborate with me? Let‘s join forces and make magic
        happen! 💫
      </p>
      <Button className="my-4">Contact Me</Button>
      <div className="flex items-center gap-4">
        {SocialLinks.map(({ link, icon, title }, idx) => (
          <div className="flex gap-4 items-center" key={idx}>
            <Link href={link} className="flex items-center gap-2">
              {icon}
              <p>{title}</p>
            </Link>
            {idx != SocialLinks.length - 1 && <div className="w-1 h-5 bg-white"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collab;

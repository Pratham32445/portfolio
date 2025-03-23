import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import React from "react";

const Home = () => {
  return (
    <div className="relative">
      <div className="max-w-3xl m-auto pt-32 relative">
        <Hero />
        <Socials />
        <Projects />
        <Skills />
      </div>
    </div>
  );
};

export default Home;

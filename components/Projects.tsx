import React from "react";
import Projectdata from "./Projectdata";

const projectsData = [
  {
    name: "Generate.AI",
    description:
      "Generate your ai images by training your model,generate images by our predefined packs so you dont have to write your custom prompts",
    technologies: ["NextJs", "Postgresql", "Typescript", "Fal.ai", "AWS","Docker","Tailwind css","prisma"],
    githubRepo: "https://github.com/Pratham32445/Generate-AI",
    Livelink: "https://generate.ai.code10x.online",
    video : "/peetcode.mp4",
    projectID: 1,
  },
  {
    name: "Peetcode",
    description:
      "Platform where you can solve Premium coding Problems completely for free with ai assistant,system design,HLD,LLD for completely free",
      technologies: ["NextJs", "Postgresql", "Typescript", "Judge0", "AWS","Docker","Tailwind css","prisma","websocket","webrtc"],
    githubRepo: "https://github.com/Pratham32445/peetcode-landing-deploy",
    Livelink: "peetcode-landing-deploy.vercel.app",
    projectID: 2,
    video : ""
  },
];

const Projects = () => {
  return (
    <div className="mb-10">
      <h1 className="text-center mt-20 mb-4 text-3xl">Projects</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {projectsData.map((projectObj) => (
          <div key={projectObj.projectID} className="w-[350px]">
            <Projectdata projectObj={projectObj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import Projectdata from "./Projectdata";

const projectsData = [
  {
    name: "Generate.AI",
    description:
      "Generate your ai images by training your model,generate images by our predefined packs so you dont have to write your custom prompts",
    technologies: [
      "NextJs",
      "Postgresql",
      "Typescript",
      "Fal.ai",
      "AWS",
      "Docker",
      "Tailwind css",
      "prisma",
    ],
    githubRepo: "https://github.com/Pratham32445/Generate-AI",
    video: "/generate.mp4",
    projectID: 1,
  },
  {
    name: "Peetcode",
    description:
      "Platform where you can solve Premium coding Problems completely for free with ai assistant,system design,HLD,LLD for completely free",
    technologies: [
      "NextJs",
      "Postgresql",
      "Typescript",
      "Judge0",
      "AWS",
      "Docker",
      "Tailwind css",
      "prisma",
      "websocket",
      "webrtc",
    ],
    githubRepo: "https://github.com/Pratham32445/peetcode-landing-deploy",
    projectID: 2,
    video: "/peetcode.mp4",
  },
  {
    name: "Recipt",
    description:
      "Plaform where you can generate your github recipt by providing your github username and recieve your Recipt",
    technologies: [
      "NextJs",
      "Github API",
      "Typescript",
      "Tailwind css",
      "Shadcn"
    ],
    githubRepo: "https://github.com/Pratham32445/Recipt",
    projectID: 3,
    video: "/recipt.mp4",
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

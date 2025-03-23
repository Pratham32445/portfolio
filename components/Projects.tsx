import React from "react";
import Projectdata from "./Projectdata";

const projectsData = [
  {
    name: "Generate.AI",
    description:
      "Generate your ai images by training your model,generate images by our predefined packs so you dont have to write your custom prompts",
    technologies: ["NextJs", "Postgresql", "Typescript", "Fal.ai", "AWS"],
    githubRepo: "https://github.com/Pratham32445/portfolio",
    Livelink: "https://generate.ai.code10x.online",
    projectID: 1,
  },
  {
    name: "Peetcode",
    description:
      "Generate your ai images by training your model,generate images by our predefined packs so you dont have to write your custom prompts",
    technologies: ["NextJs", "Postgresql", "Typescript", "Fal.ai", "AWS"],
    githubRepo: "https://github.com/Pratham32445/portfolio",
    Livelink: "https://generate.ai.code10x.online",
    projectID: 2,
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

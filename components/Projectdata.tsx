"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectObj {
  name: string;
  description: string;
  technologies: string[];
  githubRepo: string;
  Livelink: string;
  projectID: number;
  video: string;
}

const Projectdata = ({ projectObj }: { projectObj: ProjectObj }) => {
  return (
    <Card className="p-0 bg-[#0f0f0f] hover:bg-[#1e1e1e] cursor-pointer transition">
      <CardHeader>
        <ReactPlayer controls width={300} height={300} url={projectObj.video} />
      </CardHeader>
      <CardContent>
        <p className="font-bold text-xl">{projectObj.name}</p>
        <div className="w-20 h-1 my-2 bg-white rounded"></div>
        <p className="text-md">{projectObj.description}</p>
        <div>
          <p className="my-2 font-bold">Tech:</p>
          <div className="flex flex-wrap gap-4 mt-4">
            {projectObj.technologies.map((tech, idx) => (
              <div className="w-fit bg-[#333] p-2 rounded" key={idx}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="mb-4 flex items-center gap-4">
          <Link href={projectObj.githubRepo}>
            <Button className="cursor-pointer">
              {" "}
              <Image
                className="bg-black"
                alt="github"
                src={"/github.svg"}
                width={20}
                height={20}
              />{" "}
              Github
            </Button>
          </Link>
          <Link href={projectObj.Livelink}>
            <Button className="cursor-pointer">
              Checkout
              <ArrowUpRight />
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Projectdata;

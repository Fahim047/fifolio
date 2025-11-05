import React from "react";
import { IconType } from "react-icons";
import {
  SiAngular,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  icon: IconType;
}

const skills: Skill[] = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "Github", icon: SiGithub },
  { name: "Firebase", icon: SiFirebase },
  { name: "Go", icon: SiGo },
  { name: "Angular", icon: SiAngular },
  { name: "Docker", icon: SiDocker },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center text-blue-400 mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-center p-6 
                         text-center cursor-pointer transition-transform 
                         duration-300 hover:scale-105"
            >
              <CardContent className="flex flex-col items-center justify-center gap-2">
                <skill.icon className="text-4xl text-primary/80" />
                <span className="font-sm text-foreground">{skill.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

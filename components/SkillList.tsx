import type React from "react";
import type { IconType } from "react-icons";
import {
  SiAngular,
  SiBootstrap,
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
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiRust,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const skills: Skill[] = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#563D7C" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "NestJS", icon: SiNestjs, color: "#DD0031" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Redis", icon: SiRedis, color: "#DD0031" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Github", icon: SiGithub, color: "#181717" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Rust", icon: SiRust, color: "orange" },
];

const SkillList: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2 max-w-4xl mx-auto">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="inline-flex items-center gap-1.5 px-4 py-2 
                         bg-secondary/50 hover:bg-secondary rounded-md
                         border border-border/50 hover:border-border
                         transition-all duration-200 hover:scale-105
                         cursor-default group dark:bg-gray-600/30"
        >
          <skill.icon
            className="text-2xl transition-colors"
            style={{ color: skill.color }}
          />
          <span className="text-sm font-medium text-foreground">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SkillList;

import SocialLinks from "@/components/SocialLinks";
import { Badge } from "@/components/ui/badge";
import data from "@/data/data.json";
import Image from "next/image";

const aboutData = {
  intro: {
    name: "Fahimul Islam",
    location: "Bangladesh",
    experience: "2",
    tagline:
      "I focus on details and I'm passionate about crafting web applications that look great and are both accessible and easy to maintain.",
  },
  journey: {
    title: "My Journey",
    content:
      "I started programming because I was curious about how websites work. At first, I learned basic HTML and CSS, but soon I got interested in JavaScript and full-stack development. Now, I work with technologies like React, Next.js, TypeScript, Node.js, and MongoDB. I love solving problems, writing clean code, and learning new things to improve my skills.",
  },
  passion: {
    title: "What I Love to Do",
    content:
      "I enjoy building websites that look great and work smoothly. Whether it's creating a user-friendly design or developing a strong back-end, I focus on making web applications easy to use, fast, and reliable.",
  },
  beyond: {
    title: "My Hobbies & Interests",
    content:
      "When I'm not coding, I like playing cricket (soccer), watching movies, and sometimes playing video games. I also enjoy talking to other developers, sharing knowledge, and contributing to open-source projects.",
  },
};

const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Golang",
  "Python",
  "C",
  "C++",
  "Git",
  "React",
  "Next.js",
  "Vue",
  "Angular",
  "Node.js",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Drizzzle ORM",
  "NestJS",
  "RESTful APIs",
  "GraphQL",
  "Docker",
  "Linux",
];

export default function AboutPage() {
  return (
    <article className="min-h-screen mt-12">
      <section className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-primary">About</h1>

        <div className="space-y-4">
          <p className="text-lg">
            👋 Hey there! I&apos;m {aboutData.intro.name}, a full-stack web
            developer from{" "}
            <span className="text-primary hover:underline">
              {aboutData.intro.location}
            </span>{" "}
            with over {aboutData.intro.experience} years of experience.
          </p>
          <p className="text-muted-foreground">{aboutData.intro.tagline}</p>
        </div>

        <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
          <Image src="/fif.jpeg" alt="" fill className="object-scale-down" />
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 text-sm text-primary-foreground text-center">
            &copy; 2023 {aboutData.intro.name}
          </div>
        </div>

        <div className="space-y-8 pt-6">
          {Object.entries({
            journey: aboutData.journey,
            passion: aboutData.passion,
            beyond: aboutData.beyond,
          }).map(([key, section]) => (
            <div key={key} className="space-y-2">
              <h2 className="text-xl font-semibold text-primary">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}

          <div className="border-t border-border pt-6">
            <h2 className="text-lg font-semibold mb-4 text-primary">
              Let&apos;s connect!
            </h2>
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-primary">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant={"outline"}
              className="px-2 py-1 bg-secondary text-sm"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl mx-auto mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-primary">Education</h2>
        </div>

        <div className="space-y-6">
          {data?.education.map((education, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="size-24 rounded-lg bg-secondary overflow-hidden shrink-0">
                <Image
                  src={education.logo}
                  alt={`${education.institution} logo`}
                  width={600}
                  height={500}
                  className="size-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg text-primary">
                  {education.institution}
                </h3>
                <p className="text-muted-foreground">{education.degree}</p>
                <p className="text-sm text-muted-foreground/80">
                  {education.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

import type React from "react";
import SkillList from "./SkillList";

const SkillsSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-400 mb-8">My Skills</h2>
        <SkillList />
      </div>
    </section>
  );
};

export default SkillsSection;

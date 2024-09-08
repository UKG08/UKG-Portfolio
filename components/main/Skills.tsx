import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  const skillGroups = [
    { data: Skill_data, title: "Skill Data" },
    { data: Frontend_skill, title: "Frontend Skills" },
    { data: Backend_skill, title: "Backend Skills" },
    { data: Full_stack, title: "Full Stack Skills" },
    { data: Other_skill, title: "Other Skills" },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }} // Fixed the missing parenthesis
    >
      <SkillText />

      {skillGroups.map((group, index) => (
        <div
          key={index}
          className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"
        >
          {group.data.map((image, idx) => (
            <SkillDataProvider
              key={idx}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={idx}
            />
          ))}
        </div>
      ))}

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

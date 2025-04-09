import React from "react";
import { SideMenuProps } from "./types";

const SideMenu: React.FC<SideMenuProps> = ({
  education,
  skillCategories,
  languages,
}) => {
  return (
    <div className="flex flex-col w-1/4 min-h-screen bg-gray-100 p-6 border-r border-gray-200 gap-5">
      <div className="mt-60">
        <h2 className="text-xl font-bold mb-4 text-gray-700 text-justify">
          Education
        </h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-gray-700 text-justify">
              {edu.school}:
            </h3>
            <p className="text-gray-600 text-justify">
              {edu.degree} - {edu.period}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-2">
        <h2 className="text-xl font-bold mb-4 text-gray-700 text-justify">
          Skills
        </h2>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-3 text-justify">
              {category.name}:{" "}
            </h3>
            <p className="text-gray-600 text-justify">
              {category.skills.map((skill) => skill.name).join(", ")}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-700 text-justify">
          Languages
        </h2>
        {languages.map((lang, index) => (
          <div key={index} className="mb-2 text-justify">
            <span className="text-gray-600 text-justify">
              {lang.name} - {lang.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;

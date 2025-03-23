import React from "react";
import { SideMenuProps } from "./types";

const SideMenu: React.FC<SideMenuProps> = ({
  education,
  skills,
  languages,
}) => {
  return (
    <div className="w-1/4 min-h-screen bg-gray-100 p-6 border-r border-gray-200">
      <div className="mt-50">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-red-500">{edu.school}</h3>
            <p className="text-gray-600">{edu.degree}</p>
            <p className="text-gray-500 text-sm">{edu.period}</p>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-gray-600">{skill.name}</span>
              <span className="text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gray-600 rounded-full h-2"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-700">Languages</h2>
        {languages.map((lang, index) => (
          <div key={index} className="mb-2">
            <span className="text-gray-600">{lang.name}</span>
            <span className="text-gray-500 ml-2">- {lang.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;

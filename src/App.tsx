import './App.css'

import Experiences from "./components/Experiences";
import userIcon from "./assets/user-icon.png";
import SideMenu from "./components/SideMenu";

import {
  education,
  languages,
  user,
  socialMedia,
  experiences,
  extraActivities,
  skillCategories,
} from "./Users/nauane-linhares";

function App() {
  return (
    <div className="flex">
      <SideMenu
        education={education}
        skillCategories={skillCategories}
        languages={languages}
        socialMedia={socialMedia}
      />
      {/* Main content */}
      <div className="w-3/4 p-6">
        <h1 className="bg-gray-700 bg-clip-text text-5xl font-extrabold text-transparent ...">
          {user.name}
        </h1>
        <h2 className="text-gray-500 text-2xl">{user.role}</h2>

        <div className="flex flex-row gap-4 justify-center items-center m-4"></div>
        <hr className="my-4 h-[1.75px]" />

        <div className="flex flex-row gap-4 mt-8 items-center">
          <img src={userIcon} alt="user" className="w-8 h-8 filter grayscale" />
          <span className="text-gray-500 text-2xl">About me</span>
        </div>

        <hr className="my-4 bg-gray-500 h-[1.75px]" />

        <div className="flex flex-col gap-2 text-justify">
          <span className="text-gray-500 ">{user.description}</span>
        </div>

        <hr className="my-4 bg-gray-500 h-[1.75px]" />

        <Experiences experiences={experiences} title="Experiences" />

        <hr className="my-4 bg-gray-500 h-[1.75px]" />

        <Experiences experiences={extraActivities} title="Extra Activities" />
      </div>
    </div>
  );
}

export default App

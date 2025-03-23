import './App.css'
import Drawing from './components/Drawing/Drawing'
import residentEvil from './assets/residentEvil.jpg'
import instagram from './assets/instagram.png'
import linkedin from './assets/linkedin.png'
import gmail from './assets/gmail.png'
import { Grid2 } from '@mui/material'
import Experiences from './components/Experiences'
import userIcon from "./assets/user-icon.png";
import SideMenu from "./components/SideMenu";

import {
  education,
  skills,
  languages,
  user,
  socialMedia,
  experiences,
} from "./Users/kubra-gonen";

function App() {
  return (
    <div className="flex">
      <SideMenu education={education} skills={skills} languages={languages} />

      {/* Main content */}
      <div className="w-3/4 p-6">
        <h1 className="bg-gradient-to-r from-gray-500 to-stone-950 bg-clip-text text-5xl font-extrabold text-transparent ...">
          {user.name}
        </h1>
        <h2 className="text-gray-500 text-2xl">{user.role}</h2>

        <div className="flex flex-row gap-4 justify-center items-center m-4">
          {[...Array(socialMedia.length)].map((_, i) => (
            <div key={i} className="w-12 h-12">
              <img
                src={
                  socialMedia[i].icon === "iconLinkedin"
                    ? linkedin
                    : socialMedia[i].icon === "iconInstagram"
                    ? instagram
                    : gmail
                }
                alt={socialMedia[i].label}
                onClick={() => window.open(socialMedia[i].url, "_blank")}
                className="rounded-2xl object-cover hover:scale-120 transition-all duration-300 grayscale"
              />
            </div>
          ))}
        </div>
        <hr className="my-4 h-[1.75px]" />

        <div className="flex flex-row gap-4 mt-8 items-center">
          <img src={userIcon} alt="user" className="w-8 h-8 filter grayscale" />
          <span className="text-gray-500 text-2xl">Profile</span>
        </div>

        <hr className="my-4 bg-gray-500 h-[1.75px]" />

        <div className="flex flex-col gap-2 text-justify">
          <span className="text-gray-500 ">{user.description}</span>
        </div>

        <hr className="my-4 bg-gray-500 h-[1.75px]" />

        <Experiences experiences={experiences} />

        <hr className="my-4 bg-gray-500 h-[1.75px]" />

        <div className="text-gray-500 text-4xl pb-4">Portfolio</div>
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Drawing image={residentEvil} title="Lady Dimitrescu" />
          </Grid2>
          <Grid2 size={4}>
            <Drawing image={residentEvil} title="Lady Dimitrescu" />
          </Grid2>
          <Grid2 size={4}>
            <Drawing image={residentEvil} title="Lady Dimitrescu" />
          </Grid2>
        </Grid2>
      </div>
    </div>
  );
}

export default App

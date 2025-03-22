import './App.css'
import Drawing from './components/Drawing/Drawing'
import residentEvil from './assets/residentEvil.jpg'
import instagram from './assets/instagram.png'
import linkedin from './assets/linkedin.png'
import gmail from './assets/gmail.png'
import { Grid2 } from '@mui/material'
import Experiences from './components/Experiences'
import { ExperienceProps } from './components/Experiences/types'
import { SocialMediaProps } from './types/social-media'


const experiences: ExperienceProps[] = [
  {
    company: 'Masterpiece',
    title: 'Sculpture Workshop Instructor',
    startDate: '2022',
    endDate: '2023',
    description: 'I taught sculpture workshops to children and adults. I also helped them to create their own sculptures.',
    iconCompany: 'iconCompany 1',
  },
  {
    company: 'Company 2',
    title: 'Job Title 2',
    startDate: '2022',
    endDate: '2023',
    description: 'Description 2',
    iconCompany: 'iconCompany 2',
  },
  {
    company: 'Company 3',
    title: 'Job Title 3',
    startDate: '2022',
    endDate: '2023',
    description: 'Description 3 awuhdauhwduhadhuawduhawhudawhud awhudawh udhuaw dhuawhud awuhd awhudwauh dawhud huawuhdawhu dawuhd uhawduhawd uhawuhdaw uhduhaw duhawhud awuhdawuh dahuw dhuawuhd awuhdahwu dhuaw dhuawhu dawhu duhawudh awhudhuaw duhaw duhawuhd awhudaw uhdauhw duhw',
    iconCompany: 'iconCompany 3',
  }
]

const socialMedia: SocialMediaProps[] = [
  {
    label: 'Linkedin',
    url: 'https://www.linkedin.com/in/k%C3%BCbra-g%C3%B6nen-477169220/',
    icon: 'iconLinkedin',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/kbragnn/',
    icon: 'iconInstagram',
  },
  {
    label: 'Email',
    url: 'mailto:kubragnn.0@gmail.com',
    icon: 'iconEmail',
  }
]

function App() {
 
  return (
    <>
      <div>
      
      </div>
      <h1 className="bg-gradient-to-r from-gray-500 to-stone-950 bg-clip-text text-5xl font-extrabold text-transparent ...">
      Kübra Gönen
    </h1>
    <div className="flex flex-row gap-4 justify-center items-center m-4">
  {[...Array(socialMedia.length)].map((_, i) => (
    <div key={i} className="w-12 h-12">
      <img 
        src={socialMedia[i].icon === 'iconLinkedin' ? linkedin : socialMedia[i].icon === 'iconInstagram' ? instagram : gmail} 
        alt={socialMedia[i].label} 
        onClick={() => window.open(socialMedia[i].url, '_blank')}
        className="rounded-2xl object-cover hover:scale-120 transition-all duration-300 grayscale"
      />
    </div>
  ))}
</div>
<Experiences  experiences={experiences}/>
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
 

      
    </>
  )
}

export default App

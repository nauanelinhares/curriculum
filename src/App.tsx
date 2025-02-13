import { useState } from 'react'
import './App.css'
import Drawing from './components/Drawing'
import residentEvil from './assets/residentEvil.jpg'
import { Grid2 } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
      </div>
      <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ...">
      Kübra Gönen
    </h1>
    <div className="flex gap-2 justify-center items-center">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="w-10 h-10 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full m-8"></div>
  ))}
</div>
<Grid2 container spacing={2} className="flex flex-col gap-4 justify-center items-center">
  <Grid2 size={8}>
    <Drawing image={residentEvil} title="Lady Dimitrescu" />
  </Grid2>
  <Grid2 size={8}>
    <Drawing image={residentEvil} title="Lady Dimitrescu" />
  </Grid2>
</Grid2>
 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

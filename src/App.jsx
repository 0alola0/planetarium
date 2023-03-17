import { useState } from 'react'
import reactLogo from '../public/assets/logo.svg'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import './App.css'
import './BootstrapOverride.css'
import PlanetShowcase from './components/PlanetShowcase'
import NavigationButtons from './components/NavigationButtons'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <NavigationButtons/>
    <Routes>
      <Route path='/' element={<Navigate to="/Neptune"/>}/>
      <Route path='/:name' element={<PlanetShowcase/>}/>
    </Routes>

    </>

  )
}

export default App

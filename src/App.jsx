import { useState } from 'react'
import reactLogo from '/assets/logo.svg'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import './App.css'
import './BootstrapOverride.css'
import PlanetShowcase from './components/PlanetShowcase'
import NavigationButtons from './components/NavigationButtons'
import PageNotFound from './components/PageNotFound'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <NavigationButtons/>
    <Routes>
      <Route path='/' element={<Navigate to="/neptune"/>}/>
      <Route path='/:name' element={<PlanetShowcase/>}/>
    </Routes>
    </>

  )
}

export default App

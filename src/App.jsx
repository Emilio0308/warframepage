import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Warframe from './pages/Warframe'
import WarframeDetail from './components/warframe/WarframeDetail'
import Weapons from './pages/Weapons'
import WeaponByCategory from './components/weapons/WeaponByCategory'
import PlanetsCycle from './pages/PlanetsCycle'
import Footer from './components/Footer'
import Items from './pages/Items'

function App() {

  return (
    <main className='font-sans'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/warframes' element={<Warframe/>} />
        <Route path='/warframes/:name' element={<WarframeDetail/>} />
        <Route path='/weapons' element={<Weapons/>} />
        <Route path='/weapons/:categoryName' element={<WeaponByCategory/>} />
        <Route path='/cycles' element={<PlanetsCycle/>} />
        <Route path='/items' element={<Items/>} />
      </Routes>
     <Footer/>
    </main>
  )
}

export default App

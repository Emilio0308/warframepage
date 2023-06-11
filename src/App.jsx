// import { Route, Routes } from 'react-router-dom'
// import Home from './components/home/Home'
// import Warframe from './pages/Warframe'
// import WarframeDetail from './components/warframe/WarframeDetail'
// import Weapons from './pages/Weapons'
// import WeaponByCategory from './components/weapons/WeaponByCategory'
// import PlanetsCycle from './pages/PlanetsCycle'
// import Footer from './components/Footer'
// import Mods from './pages/Mods'
// import WeaponDetailById from './components/weapons/WeaponDetailById'
// import Resources from './pages/Resources'
// import Sentinels from './pages/Sentinels'
// import SentinelDetailByName from './components/sentinels/SentinelDetailByName'
// import Quests from './pages/Quests'

// function App() {

//   return (
//     <main className='font-sans'>
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/warframes' element={<Warframe/>} />
//         <Route path='/warframes/:name' element={<WarframeDetail/>} />
//         <Route path='/weapons' element={<Weapons/>} />
//         <Route path='/weapons/:categoryName' element={<WeaponByCategory/>} />
//         <Route path='/weapons/detail/:weaponName' element={<WeaponDetailById/>} />
//         <Route path='/cycles' element={<PlanetsCycle/>} />
//         <Route path='/mods' element={<Mods/>} />
//         <Route path='/resources' element={<Resources/>} />
//         <Route path='/sentinels' element={<Sentinels/>} />
//         <Route path='/sentinels/:name' element={<SentinelDetailByName/>} />
//         <Route path='/quests' element={ <Quests/>} />
//       </Routes>
//      <Footer/>
//     </main>
//   )
// }

// export default App

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Loading from './components/fragmentsUtils/Loading';

// Importa los componentes que deseas cargar de forma dinámica
const Warframe = lazy(() => import('./pages/Warframe'));
const WarframeDetail = lazy(() => import('./components/warframe/WarframeDetail'));
const Weapons = lazy(() => import('./pages/Weapons'));
const WeaponByCategory = lazy(() => import('./components/weapons/WeaponByCategory'));
const PlanetsCycle = lazy(() => import('./pages/PlanetsCycle'));
const Footer = lazy(() => import('./components/Footer'));
const Mods = lazy(() => import('./pages/Mods'));
const WeaponDetailById = lazy(() => import('./components/weapons/WeaponDetailById'));
const Resources = lazy(() => import('./pages/Resources'));
const Sentinels = lazy(() => import('./pages/Sentinels'));
const SentinelDetailByName = lazy(() => import('./components/sentinels/SentinelDetailByName'));
const Quests = lazy(() => import('./pages/Quests'));

function App() {
  return (
    <main className='font-sans'>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/warframes' element={<Warframe />} />
          <Route path='/warframes/:name' element={<WarframeDetail />} />
          <Route path='/weapons' element={<Weapons />} />
          <Route path='/weapons/:categoryName' element={<WeaponByCategory />} />
          <Route path='/weapons/detail/:weaponName' element={<WeaponDetailById />} />
          <Route path='/cycles' element={<PlanetsCycle />} />
          <Route path='/mods' element={<Mods />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/sentinels' element={<Sentinels />} />
          <Route path='/sentinels/:name' element={<SentinelDetailByName />} />
          <Route path='/quests' element={<Quests />} />
        </Routes>
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;

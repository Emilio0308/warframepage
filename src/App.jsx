import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/fragmentsUtils/Loading";
import NavBar from "./components/fragmentsUtils/NavBar";
import Home from "./components/home/Home";

// Importa los componentes que deseas cargar de forma dinámica
const Warframe = lazy(() => import("./pages/Warframe"));
const WarframeDetail = lazy(() =>
  import("./components/warframe/WarframeDetail")
);
const Weapons = lazy(() => import("./pages/Weapons"));
const WeaponByCategory = lazy(() =>
  import("./components/weapons/WeaponByCategory")
);
const PlanetsCycle = lazy(() => import("./pages/PlanetsCycle"));
const Footer = lazy(() => import("./components/Footer"));
const Mods = lazy(() => import("./pages/Mods"));
const ModByName = lazy(() => import("./components/mods/ModByName"));
const WeaponDetailById = lazy(() =>
  import("./components/weapons/WeaponDetailById")
);
const Resources = lazy(() => import("./pages/Resources"));
const ResourcesDetailByName = lazy(() =>
  import("./components/resources/ResourcesDetailByName")
);
const Sentinels = lazy(() => import("./pages/Sentinels"));
const SentinelDetailByName = lazy(() =>
  import("./components/sentinels/SentinelDetailByName")
);
const Quests = lazy(() => import("./pages/Quests"));
const Pets = lazy(() => import("./pages/Pets"));
const PetBYName = lazy(() => import("./components/pets/PetBYName"));

function App() {
  return (
    <main className="font-sans">
      <Suspense fallback={<Loading />}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warframes" element={<Warframe />} />
          <Route path="/warframes/:name" element={<WarframeDetail />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/weapons/:categoryName" element={<WeaponByCategory />} />
          <Route
            path="/weapons/detail/:weaponName"
            element={<WeaponDetailById />}
          />
          <Route path="/cycles" element={<PlanetsCycle />} />
          <Route path="/mods" element={<Mods />} />
          <Route path="/mods/:name" element={<ModByName />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:name" element={<ResourcesDetailByName />} />
          <Route path="/sentinels" element={<Sentinels />} />
          <Route path="/sentinels/:name" element={<SentinelDetailByName />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pets/:name" element={<PetBYName />} />
        </Routes>
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;

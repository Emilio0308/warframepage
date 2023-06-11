import { useEffect, useState } from "react";
import { axiosWarframe } from "../utils/configAxios";
import WorldCard from "../components/cycles/WorldCard";

const PlanetsCycle = () => {
  const [plataform, setPlataform] = useState("pc");
  const [worlds, setWorlds] = useState([]);

  useEffect(() => {
    axiosWarframe
      .get(`${plataform}/`)
      .then((res) => {
        const listWorlds = [];
        listWorlds.push(res.data.earthCycle);
        listWorlds.push(res.data.cetusCycle);
        listWorlds.push(res.data.cambionCycle);
        listWorlds.push(res.data.zarimanCycle);
        listWorlds.push(res.data.vallisCycle);
        setWorlds(listWorlds);
      })
      .catch((err) => console.log(err));
  }, [plataform]);

  return (
    <section className="bg-[url(/planets/earth2.jpg)] bg-fixed bg-left-top bg-no-repeat pb-[120px]">
      <section className="max-w-[1200px] w-full mx-auto grid sm:grid-cols-[1fr,_2fr] py-20 p-3">
        <h2 className="text-white mix-blend-difference p-16 text-3xl self-center">PLANETS CYCLES</h2>
        <section className="grid gap-5 grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))] auto-rows-fr">
          {worlds?.map((world) => (
            <WorldCard key={world.id} world={world}>
              {world.id}
            </WorldCard>
          ))}
        </section>
      </section>
    </section>
  );
};
export default PlanetsCycle;

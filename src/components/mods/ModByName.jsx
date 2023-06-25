import { useParams } from "react-router-dom";
import { axiosWarframe } from "../../utils/configAxios";
import { useEffect, useState } from "react";
import ComponentsDrop from "../fragmentsUtils/ComponentsDrop";
import LevelStatsMod from "./LevelStatsMod";
import SectionTitle from "../fragmentsUtils/SectionTitle";
import PatchlogsComponent from "../fragmentsUtils/PatchlogsComponent";
import HeaderPageDetail from "../fragmentsUtils/HeaderPageDetail";

const ModByName = () => {
  const { name } = useParams();
  const [modByName, setModByName] = useState([]);
  const nameOfMod = name.split("-")[0];
  const fusionLimitOfMod = name.split("-")[1];

  useEffect(() => {
    axiosWarframe
      .get(`mods/search/${nameOfMod}/`)
      .then((res) => {
        const mod = res.data.filter((mod) => {
          if (mod.levelStats) {
            return mod.levelStats.length == fusionLimitOfMod;
          } else {
            return mod.name == nameOfMod;
          }
        });
        setModByName(mod[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="p-3 bg-[url(/warframes/warframesdetailbg2.jpg)] bg-fixed">
      <section className="w-full mx-auto max-w-[1200px] mb-[120px] flex flex-col gap-10">
        <article className="grid sm:grid-cols-2 gap-10">
          <HeaderPageDetail item={modByName} />
          <div className="self-end grid gap-5 max-w-[400px] pb-4">
            <div className="grid grid-cols-2 border-b-2 border-red-600 py-3">
              <span className="uppercase font-medium">polarity</span>
              <span className="capitalize font-medium text-red-700">{modByName.polarity}</span>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-red-600 py-3">
              <span className="uppercase font-medium">rarity</span>
              <span className="capitalize font-medium text-red-700">{modByName.rarity}</span>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-red-600 py-3">
              <span className="uppercase font-medium">compatName</span>
              <span className="capitalize font-medium text-red-700">{modByName.compatName}</span>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-red-600 py-3">
              <span className="uppercase font-medium">isPrime</span>
              <span className="capitalize font-medium text-red-700">{modByName.isPrime ? "yes" : "no"}</span>
            </div>
          </div>
        </article>
        <article className="shadow-xl p-3 bg-[#ececec]">
          <SectionTitle title={"drops"} />
          <div className="max-h-[500px] overflow-y-auto">
            {modByName.drops?.map((drop) => (
              <ComponentsDrop key={drop.location} drop={drop} />
            ))}
          </div>
        </article>
        <article className="shadow-xl p-3 bg-[#ececec]">
          <SectionTitle title={"level Stats"} />
          <div className="grid gap-4">
            {modByName.levelStats?.map((levelStat, i) => (
              <LevelStatsMod key={i} levelStats={levelStat} i={i} />
            ))}
          </div>
        </article>
        <article className="shadow-xl p-3 bg-[#ececec]">
          <PatchlogsComponent patchlogs={modByName.patchlogs} />
        </article>
      </section>
    </section>
  );
};
export default ModByName;

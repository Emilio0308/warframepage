import { useEffect, useState } from "react";
import { axiosWarframe } from "../../utils/configAxios";
import ReosourceCard from "../resources/ReosourceCard";

const ModsForSentinel = ({ sentinelByName }) => {
  const [listOfModsByName, setListOfModsByName] = useState([]);
  useEffect(() => {
    axiosWarframe
      .get("https://api.warframestat.us/mods/")
      .then((res) => {
        const listOfMods = res.data.filter(
          (mod) => mod.compatName === sentinelByName
        );
        setListOfModsByName(listOfMods);
      })
      .catch();
  }, []);

  return (
    <section className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-5 justify-items-center">
      {listOfModsByName.map((mod) => (
        <ReosourceCard
          resource={mod}
          path={"mods"}
          param={mod.name + "-" +mod.levelStats?.length}
          key={mod.name}
        />
      ))}
    </section>
  );
};
export default ModsForSentinel;

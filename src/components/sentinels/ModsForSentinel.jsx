import { useEffect, useState } from "react";
import { axiosWarframe } from "../../utils/configAxios";
import ReosourceCard from "../resources/ReosourceCard";

const ModsForSentinel = ({ sentinelByName }) => {
  const [listOfModsByName, setListOfModsByName] = useState([]);

  useEffect(() => {
    axiosWarframe
      .get(`mods/search/${sentinelByName}`, {
        params: {
          by: "compatName",
        },
      })
      .then((res) => {
        setListOfModsByName(res.data);
      })
      .catch();
  }, []);

  return (
    <section className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-5 justify-items-center">
      {listOfModsByName.map((mod) => (
        <ReosourceCard
          resource={mod}
          path={"mods"}
          param={mod.name + "-" + mod.levelStats?.length}
          key={mod.name}
        />
      ))}
    </section>
  );
};
export default ModsForSentinel;

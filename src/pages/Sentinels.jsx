import { useEffect } from "react";
import { useState } from "react";
import { axiosWarframe } from "../utils/configAxios";
import SentinelCard from "../components/sentinels/SentinelCard";
import ImgHeader from "../components/ImgHeader";

const Sentinels = () => {
  const [allSentinels, setAllSentinels] = useState([]);

  useEffect(() => {
    axiosWarframe
      .get("/items")
      .then((res) => {
        const sentinels = res.data.filter(
          (item) => item.category == "Sentinels"
        );
        setAllSentinels(sentinels);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ImgHeader img={"./sentinels/ashWithSentinel.jpg"} />
      <section className="w-full h-full">
        <section className="w-full max-w-[1200px] p-3 mx-auto">
          <h2 className="text-4xl tracking-[5px] font-medium uppercase py-10">
            SENTINELS
          </h2>
          <section className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-4">
            {allSentinels.map((sentinel) => (
              <SentinelCard
                key={sentinel.uniqueName}
                sentinel={sentinel}
              />
            ))}
          </section>
        </section>
      </section>
    </>
  );
};
export default Sentinels;
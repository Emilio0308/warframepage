import { useEffect, useState } from "react";
import ImgHeader from "../components/ImgHeader";
import Loading from "../components/fragmentsUtils/Loading";
import SentinelCard from "../components/sentinels/SentinelCard";
import { axiosWarframe } from "../utils/configAxios";

const Sentinels = () => {
  const [allSentinels, setAllSentinels] = useState([]);

  useEffect(() => {
    axiosWarframe
      .get("items/search/Sentinels", {
        params: {
          by: "category",
        },
      })
      .then((res) => {
        setAllSentinels(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ImgHeader img={"/sentinels/ashWithSentinel.jpg"} />
      <section className="w-full h-full pb-[120px]">
        <section className="w-full max-w-[1200px] p-3 mx-auto">
          <h2 className="text-4xl tracking-[5px] font-medium uppercase py-10">
            SENTINELS
          </h2>
          {allSentinels.length > 1 ? (
            <section className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-4">
              {allSentinels.map((sentinel) => (
                <SentinelCard key={sentinel.uniqueName} sentinel={sentinel} />
              ))}
            </section>
          ) : (
            <Loading />
          )}
        </section>
      </section>
    </>
  );
};
export default Sentinels;

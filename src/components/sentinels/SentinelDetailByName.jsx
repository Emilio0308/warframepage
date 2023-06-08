import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWarframe } from "../../utils/configAxios";
import SentinelComponent from "./SentinelComponent";
import SentinelMainDetails from "./SentinelMainDetails";
import SectionTitle from "../fragmentsUtils/SectionTitle";

const SentinelDetailByName = () => {
  const [sentinelByName, setSentinelByName] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    axiosWarframe
      .get(`/items/${name}/`)
      .then((res) => {
        setSentinelByName(res.data);
        console.log(res.data);
      })
      .catch(() => console.log());
  }, [name]);

  return (
    <section className="p-3 w-full max-w-[1200px] mx-auto grid  gap-5">
      <article>
        <SentinelMainDetails sentinelByName={sentinelByName} />
      </article>
      <article>
        <SectionTitle title={"components"} />
        <section className="grid gap-4 sm:grid-cols-2">
          {sentinelByName.components?.map((component) => (
            <SentinelComponent component={component} />
          ))}
        </section>
      </article>
      <article>
      <SectionTitle title={"mods"} />
      </article>
    </section>
  );
  text - xl;
};
export default SentinelDetailByName;

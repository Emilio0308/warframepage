import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWarframe } from "../../utils/configAxios";
import SentinelMainDetails from "./SentinelMainDetails";
import SectionTitle from "../fragmentsUtils/SectionTitle";
import { v4 as uuidv4 } from "uuid";
import ModsForSentinel from "./ModsForSentinel";
import SectionComponent from "../fragmentsUtils/SectionComponent";
import PatchlogsComponent from "../fragmentsUtils/PatchlogsComponent";
import TitlePageDetail from "../fragmentsUtils/TitlePageDetail";

const SentinelDetailByName = () => {
  const [sentinelByName, setSentinelByName] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    axiosWarframe
      .get(`/items/${name}/`)
      .then((res) => {
        setSentinelByName(res.data);
      })
      .catch(() => console.log());
  }, [name]);

  return (
    <section className="p-3 w-full max-w-[1200px] mx-auto grid pb-[120px] gap-5 lg:mt-[60px]">
      <article>
        <TitlePageDetail
          title={sentinelByName.category}
          subTitle={sentinelByName.type}
        />
      </article>
      <SentinelMainDetails sentinelByName={sentinelByName} />
      <article>
        <SectionTitle title={"components"} />
        <section className="grid gap-4 sm:grid-cols-2">
          {sentinelByName.components?.map((component) => (
            <SectionComponent component={component} key={uuidv4()} />
          ))}
        </section>
      </article>
      <article>
        <SectionTitle title={"mods"} />
        <ModsForSentinel sentinelByName={name.split(" ")[0]} />
      </article>
      <PatchlogsComponent patchlogs={sentinelByName.patchlogs} />
    </section>
  );
  text - xl;
};
export default SentinelDetailByName;

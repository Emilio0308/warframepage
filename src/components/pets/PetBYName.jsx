import { useParams } from "react-router-dom";
import { axiosWarframe } from "../../utils/configAxios";
import { useEffect, useState } from "react";
import { imgUrl } from "../../utils/imgUrl";
import BasicStatistic from "./BasicStatistic";
import SectionTitle from "../fragmentsUtils/SectionTitle";
import SectionComponent from "../fragmentsUtils/SectionComponent";
import { v4 as uuidv4 } from "uuid";
import PetResources from "./PetResources";
import PatchlogsComponent from "../fragmentsUtils/PatchlogsComponent";
import HeaderPageDetail from "../fragmentsUtils/HeaderPageDetail";

const PetBYName = () => {
  const { name } = useParams();
  const [petByName, setPetByName] = useState([]);
  const [allPets, setAllPets] = useState();
  const { url } = imgUrl(petByName);
  useEffect(() => {
    axiosWarframe
      .get(`items/search/${name}`)
      .then((res) => {
        setPetByName(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [name]);

  useEffect(() => {
    axiosWarframe
      .get("items")
      .then((res) => {
        const pets = res.data.filter((item) => item.category == "Pets");
        setAllPets(pets);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="p-3">
      <section className="w-full max-w-[1200px] mx-auto mb-[120px]">
        <HeaderPageDetail
          item={petByName}
          extra={<BasicStatistic element={petByName} />}
        />
        {petByName.components && (
          <>
            <SectionTitle title={"componentes"} />
            <article className="grid sm:grid-cols-2 gap-4">
              {petByName.components.map((component) => (
                <SectionComponent key={uuidv4()} component={component} />
              ))}
            </article>
          </>
        )}
        {allPets && petByName && (
          <PetResources allPets={allPets} petByName={petByName} />
        )}
        <PatchlogsComponent patchlogs={petByName.patchlogs} />
      </section>
    </section>
  );
};
export default PetBYName;

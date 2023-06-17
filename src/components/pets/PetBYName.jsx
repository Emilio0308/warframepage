import { useParams } from "react-router-dom";
import { axiosWarframe } from "../../utils/configAxios";
import { useEffect, useState } from "react";
import { imgUrl } from "../../utils/imgUrl";
import BasicStatistic from "./BasicStatistic";
import SectionTitle from "../fragmentsUtils/SectionTitle";
import SectionComponent from "../fragmentsUtils/SectionComponent";
import { v4 as uuidv4 } from "uuid";
import PetResources from "./PetResources";

const PetBYName = () => {
  const { name } = useParams();
  const [petByName, setPetByName] = useState([]);
  const [allPets, setAllPets] = useState()
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
    axiosWarframe.get("items")
    .then((res) => {
        const pets = res.data.filter((item) => item.category == "Pets");
        setAllPets(pets)
    })
    .catch((err) => console.log(err))
  }, [])
  

  return (
    <section className="p-3">
      <section className="w-full max-w-[1200px] mx-auto mb-[120px]">
        <h2 className="text-4xl tracking-[5px] font-medium uppercase py-10">
          PETS
        </h2>
        <h3 className="text-2xl tracking-wider uppercase text-gray-700">
          {petByName.productCategory}
        </h3>
        <article className="grid gap-5 py-5">
          <h4>{petByName.name}</h4>
          <div>
            <img className="hover:drop-shadow-[-15px_-35px_45px_rgba(41,92,213,0.2)]" src={url} alt={petByName.name} />
          </div>
          <BasicStatistic element={petByName} />
          <p className="uppercase">{petByName.description}</p>
        </article>
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
        {
            allPets && petByName && <PetResources allPets={allPets} petByName={petByName} />
        }
      </section>
    </section>
  );
};
export default PetBYName;

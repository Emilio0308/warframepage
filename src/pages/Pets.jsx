import { useEffect, useState } from "react";
import Loading from "../components/fragmentsUtils/Loading";
import SectionPets from "../components/pets/SectionPets";
import { axiosWarframe } from "../utils/configAxios";

const Pets = () => {
  const [allPets, setAllPets] = useState();

  useEffect(() => {
    axiosWarframe
      .get("items/search/Pets", {
        params: {
          by: "category",
        },
      })
      .then((res) => {
        setAllPets(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (allPets) {
      const listTypes = [];
      allPets.forEach((pet) => {
        if (!listTypes.includes(pet.type)) {
          listTypes.push(pet.type);
        }
      });
    }
  }, [allPets]);

  return (
    <section className="w-full p-3 lg:mt-[60px]">
      <section className="w-full max-w-[1200px] mx-auto mb-[120px]">
        <h2 className="text-4xl tracking-[5px] font-medium uppercase py-10">
          pets
        </h2>
        {allPets ? <SectionPets allPets={allPets} /> : <Loading />}
      </section>
    </section>
  );
};
export default Pets;

import { useEffect, useState } from "react";
import PetPart from "./PetPart";

const PetResources = ({ allPets, petByName }) => {
  const [petsParts, setPetsParts] = useState([]);

  const getPartsPets = (typeParts, typePet) => {
    const parts = allPets.filter(
      (pet) =>
        pet.type == typeParts && pet.uniqueName.toLowerCase().includes(typePet)
    );
    setPetsParts(parts);
  };
  const getTypesOfParts = () => {
    const categoryOfParts = [];
    petsParts.forEach((petPart) => {
      const nameCategory = petPart.name.toLowerCase().split(" ")[0];
      if (!categoryOfParts.includes(nameCategory))
        categoryOfParts.push(nameCategory);
    });
    console.log(categoryOfParts);
  };
  useEffect(() => {
    if (petByName.name) {
      if (petByName.name.toLowerCase().includes("sabueso")) {
        getPartsPets("Pet Resource", "zanuka");
      }
      if (petByName.name.toLowerCase().includes("moa")) {
        getPartsPets("Pet Resource", "moa");
      }
      if (petByName.name.toLowerCase().includes("vulpafila")) {
        getPartsPets("Pet Parts", "");
      }
      if (petByName.name.toLowerCase().includes("predásito")) {
        getPartsPets("Pet Parts", "");
      }
    }
  }, [petByName]);

  useEffect(() => {
    if (petsParts.length > 0) {
      getTypesOfParts();
    }
  }, [petsParts]);

  return (
    <div className="flex flex-wrap">
      {petsParts.map((part) => (
        <PetPart key={part.uniqueName} part={part} />
      ))}
    </div>
  );
};
export default PetResources;

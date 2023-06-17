import ReosourceCard from "../resources/ReosourceCard";

const SectionPets = ({ allPets }) => {

  const pets = allPets.filter(
    (pet) => pet.type == "Pets" || pet.type == "Warframe"
  );


  return (
    <div>
      <section className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-4">
        {pets.map((pet) => (
          <ReosourceCard resource={pet} key={pet.uniqueName} path={"pets"} param={`${pet.name}`} />
        ))}
      </section>
      <section className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-4">
      </section>
    </div>
  );
};
export default SectionPets;

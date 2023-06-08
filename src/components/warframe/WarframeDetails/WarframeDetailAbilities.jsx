import SectionTitle from "../../fragmentsUtils/SectionTitle";
import WarframeAbilitie from "../WarframeAbilitie";

const WarframeDetailAbilities = ( { warframeName } ) => {
  return (
    <article className="">
      <SectionTitle title={"Abilities"} />
      <div className="grid gap-4 sm:grid-cols-2 auto-rows-fr">
        {warframeName?.abilities.map((abilitie) => (
          <WarframeAbilitie key={abilitie.description} abilitie={abilitie} />
        ))}
      </div>
    </article>
  );
};
export default WarframeDetailAbilities;

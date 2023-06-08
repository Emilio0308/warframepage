import SectionTitle from "../../fragmentsUtils/SectionTitle";
import WarframeComponent from "../WarframeComponent";

const WarframeComponents = ( { warframeName }) => {
  return (
    <article>
      <SectionTitle title={"components"} />
      <div className="grid gap-4 sm:grid-cols-2 auto-rows-fr">
        {warframeName?.components?.map((component) => (
          <WarframeComponent key={component.name} component={component} />
        ))}
      </div>
    </article>
  );
};
export default WarframeComponents;

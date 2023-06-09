import SectionComponent from "../../fragmentsUtils/SectionComponent";
import SectionTitle from "../../fragmentsUtils/SectionTitle";



const WarframeComponents = ( { warframeName }) => {
  return (
    <article>
      <SectionTitle title={"components"} />
      <div className="grid gap-4 md:grid-cols-2 auto-rows-fr">
        {warframeName?.components?.map((component) => (
          <SectionComponent component={component} />
        ))}
      </div>
    </article>
  );
};
export default WarframeComponents;

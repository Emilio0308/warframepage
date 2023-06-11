import SectionComponent from "../../fragmentsUtils/SectionComponent";
import SectionTitle from "../../fragmentsUtils/SectionTitle";
import { v4 as uuidv4 } from "uuid";



const WarframeComponents = ( { warframeName }) => {
  return (
    <article>
      <SectionTitle title={"components"} />
      <div className="grid gap-4 md:grid-cols-2 auto-rows-fr">
        {warframeName?.components?.map((component) => (
          <SectionComponent component={component} key={uuidv4()} />
        ))}
      </div>
    </article>
  );
};
export default WarframeComponents;

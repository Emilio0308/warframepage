import ComponentsDrop from "../fragmentsUtils/ComponentsDrop";
import PatchlogsComponent from "../fragmentsUtils/PatchlogsComponent";
import SectionComponent from "../fragmentsUtils/SectionComponent";
import { v4 as uuidv4 } from "uuid";
import SectionTitle from "../fragmentsUtils/SectionTitle";

const ResourcesDetailSection = ({ resourcesDetailByName }) => {
  return (
    <section className="grid gap-5">
      {resourcesDetailByName.drops && (
        <article>
          <SectionTitle title={"drops"} />
          <div className="max-h-[500px] overflow-y-auto">
            {resourcesDetailByName.drops?.map((drop) => (
              <ComponentsDrop drop={drop} key={uuidv4()} />
            ))}
          </div>
        </article>
      )}
      {resourcesDetailByName.components && (
        <article>
          <SectionTitle title={"components"} />
          <div className="grid sm:grid-cols-2 gap-4">
            {resourcesDetailByName.components.map((component) => (
              <SectionComponent component={component} key={uuidv4()} />
            ))}
          </div>
        </article>
      )}
      {resourcesDetailByName.patchlogs && (
        <PatchlogsComponent patchlogs={resourcesDetailByName.patchlogs} />
      )}
    </section>
  );
};
export default ResourcesDetailSection;

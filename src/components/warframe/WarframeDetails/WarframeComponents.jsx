import WarframeComponent from "../WarframeComponent";

const WarframeComponents = ( { warframeName }) => {
  return (
    <article className="">
      <div className="col-span-2 w-full grid grid-cols-[1fr,_auto,_1fr] items-center">
        <div className="w-full h-[2px] bg-red-600"></div>
        <h4 className="uppercase text-center font-medium text-3xl p-4 tracking-[4px] text-red-600">Components</h4>
        <div className="w-full h-[2px] bg-red-600"></div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 auto-rows-fr">
        {warframeName?.components?.map((component) => (
          <WarframeComponent key={component.name} component={component} />
        ))}
      </div>
    </article>
  );
};
export default WarframeComponents;

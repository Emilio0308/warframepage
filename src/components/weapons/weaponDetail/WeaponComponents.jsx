import { imgUrl } from "../../../utils/imgUrl";

const WeaponComponents = ({ component }) => {
    const { url } = imgUrl(component)
  return (
    <div
      className="border-[1px] border-gray-700 p-3 grid gap-5
                     bg-gray-700 text-white rounded-md shadow-md shadow-black"
    >
      <div
        className="grid grid-cols-2 gap-4 justify-items-center items-center"
      >
        <div className="grid grid-rows-[auto,_1fr]">
          <span>
            {component?.name} {">"}
          </span>
          <div className="w-full">
            <img className="w-full" src={url} alt={component?.name} />
          </div>
        </div>
        <p className="w-full break-words">{component?.description}</p>
      </div>

      <div className={`grid gap-2 `}>
        {component?.drops?.map((drop) => (
          <div
            key={drop.location}
            className="grid grid-cols-2 justify-items-center items-center border-[1px] border-gray-300"
          >
            <span className="text-center p-2">{drop.location}</span>
            <span className="p-2">{drop.chance}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WeaponComponents;

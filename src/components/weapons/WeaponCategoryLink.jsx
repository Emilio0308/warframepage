import { Link } from "react-router-dom";

export const WeaponCategoryLink = ( { category } ) => {
  return (
    <Link
      to={`/weapons/${category}`}
      className="grid grid-rows-[1fr,_50px] shadow-md shadow-black bg-black text-white"
    >
      <div className="">
        <img download="lazy" className="w-full h-full object-cover" src={`/sectionweapon/${category}.webp`} alt={category} />
      </div>
      <span className="p-3 w-full font-semibold uppercase tracking-[5px] hover:text-red-600 hover:bg-gray-300">{category}</span>
    </Link>
  );
};

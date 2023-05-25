import { Link } from "react-router-dom";

export const WeaponCategoryLink = ( { category } ) => {
  return (
    <Link
      to={`/weapons/${category}`}
      className="border-[2px] border-gray-700 grid grid-rows-[30px,_1fr]"
    >
      <span>{category}</span>
      <div className="">
        <img className="w-full h-full object-cover" src={`/sectionweapon/${category}.webp`} alt="" />
      </div>
    </Link>
  );
};

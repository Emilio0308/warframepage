import { imgUrl } from "../../utils/imgUrl";

const WeaponCard = ({ weapon, setCurrentWeapon }) => {
  const { url } = imgUrl(weapon);

  return (
    <article
      onClick={() => setCurrentWeapon(weapon)}
      className="cursor-pointer shadow-md shadow-black/40 grid grid-rows-[30px,_1fr] justify-items-center border-[2px] border-transparent hover:border-red-500"
    >
      <span
        className={`w-[80%] text-center font-medium border-b ${
          weapon.isPrime ? "text-[#c79616] border-[#c79616]" : "text-red-600 border-red-600"
        }`}
      >
        {weapon.name}
      </span>
      <div className="h-full w-full">
        <img
          download="lazy"
          className="object-contain h-full mx-auto"
          src={`${url}`}
          alt={weapon.name}
        />
      </div>
    </article>
  );
};
export default WeaponCard;

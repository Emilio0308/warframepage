import { Link } from "react-router-dom";
import { imgUrl } from "../../utils/imgUrl";

const WarframeCard = ({ warframe }) => {
  const { url } = imgUrl(warframe);

  return (
    <Link
      href={`/warframes/${warframe.name}`}
      className={`
      border-[3px] grid grid-rows-[auto,_ 1fr] items-center shadow-md shadow-black/30 bg-black gap-8 w-full
      ${warframe.isPrime ? "border-[#c79616]" : "border-red-600"}
      `}
    >
      <div className="w-full">
        <h4
          className={`text-center sm:tracking-[3px] uppercase font-bold border-b-2 w-[85%] mx-auto py-3 ${
            warframe.isPrime
              ? "border-[#c79616] text-[#c79616]"
              : "border-red-600 text-red-600"
          }`}
        >
          {warframe.name}
        </h4>
      </div>
      <div className="aspect-square flex justify-center items-center">
        <img src={url} alt={warframe.name} loading="lazy" />
      </div>

    </Link>
  );
};
export default WarframeCard;

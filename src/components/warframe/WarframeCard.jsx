import { imgUrl } from "../../utils/imgUrl";

const WarframeCard = ({ warframe }) => {
  const { url } = imgUrl(warframe);

  return (
    <a
      href={`/warframes/${warframe.name}`}
      className={`border-[3px] ${
        warframe.isPrime ? "border-[#c79616]" : "border-red-600"
      }  grid justify-center items-center shadow-md shadow-black/30 bg-black gap-8`}
    >
      <h4
        className={`text-center sm:tracking-[3px] uppercase font-bold border-b-2 w-[85%] mx-auto py-3 ${
          warframe.isPrime
            ? "border-[#c79616] text-[#c79616]"
            : "border-red-600 text-red-600"
        }`}
      >
        {warframe.name}
      </h4>
      <div>
        <img src={url} alt={warframe.name} loading="lazy" />
      </div>
    </a>
  );
};
export default WarframeCard;

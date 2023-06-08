import { Link } from "react-router-dom";
import { imgUrl } from "../../utils/imgUrl";

const SentinelCard = ({ sentinel}) => {
  const { url } = imgUrl(sentinel);
  return (
    <Link to={`/sentinels/${sentinel.name}`} className="grid justify-items-center bg-[#ececec]">
      <div>
        <img src={url} alt={sentinel.name} />
      </div>
      <h3
        className={`${
          sentinel.isPrime ? "text-[#c79616] bg-black" : "text-white bg-red-600"
        } font-semibold w-full text-center p-3 tracking-wider`}
      >
        {sentinel.name}
      </h3>
    </Link>
  );
};
export default SentinelCard;

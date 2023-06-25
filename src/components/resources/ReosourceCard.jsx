import { Link } from "react-router-dom";
import { imgUrl } from "../../utils/imgUrl";

const ReosourceCard = ({ resource, path, param }) => {
  const { url } = imgUrl(resource);
  return (
    <Link
      to={`/${path}/${param}`}
      className="bg-black text-white grid grid-rows-[1fr,_60px]"
    >
      <div className="flex justify-center items-center w-full h-full">
        <img
          className="w-full object-contain mx-auto"
          src={url}
          alt={resource.name}
          loading="lazy"
        />
      </div>
      <h3 className="capitalize break-words bg-black grid content-center text-white p-2 font-medium hover:text-red-600 hover:bg-gray-300">
        {resource.name.toLowerCase()}
      </h3>
    </Link>
  );
};
export default ReosourceCard;

import { Link } from "react-router-dom";
import { imgUrl } from "../../utils/imgUrl";

const ReosourceCard = ( { resource , path , param } ) => {
    const { url } = imgUrl(resource)
  return (
    <Link to={`/${path}/${param}`} className="bg-black text-white grid grid-rows-[1fr,_auto]">
      <div className="flex justify-center items-center w-full">
        <img className="w-full object-contain" src={url} alt={resource.name} loading="lazy" />
      </div>
      <span className="uppercase text-sm break-words p-3 w-full h-full grid content-center">{resource.name}</span>
    </Link>
  );
};
export default ReosourceCard;

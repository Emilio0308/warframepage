import { imgUrl } from "../../utils/imgUrl";

const ReosourceCard = ( { resource } ) => {
    const { url } = imgUrl(resource)
  return (
    <div className="bg-black text-white">
      
      <div>
        <img src={url} alt={resource.name} loading="lazy" />
      </div>
      <span>{resource.name}</span>
      <span>{resource.type}</span>
    </div>
  );
};
export default ReosourceCard;

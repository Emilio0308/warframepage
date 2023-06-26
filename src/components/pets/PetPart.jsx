import { imgUrl } from "../../utils/imgUrl";

const PetPart = ({ part }) => {
    const { url } = imgUrl(part)
  return (
    <div>
      <div>
        <img src={ url } alt={part.name} download="lazy"  />
      </div>
      <div className="text-center">{part.name}</div>
    </div>
  );
};
export default PetPart;

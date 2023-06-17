import { imgUrl } from "../../utils/imgUrl";

const PetPart = ({ part }) => {
    const { url } = imgUrl(part)
  return (
    <div>
      <span>{part.name}</span>
      <div>
        <img src={ url } alt={part.name} />
      </div>
    </div>
  );
};
export default PetPart;

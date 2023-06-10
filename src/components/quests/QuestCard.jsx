import { imgUrl } from "../../utils/imgUrl";
import SectionTitle from "../fragmentsUtils/SectionTitle";

const QuestCard = ({ currentQuest }) => {
  const { url } = imgUrl(currentQuest);
  return (
    <div>
      <SectionTitle title={currentQuest.name} />
      <section className="grid sm:grid-cols-2 gap-3">
        <div>
          <img src={url} alt={currentQuest.name} />
        </div>
        <p className="flex justify-center items-center uppercase font-medium py-3">{currentQuest.description}</p>
      </section>
    </div>
  );
};
export default QuestCard;

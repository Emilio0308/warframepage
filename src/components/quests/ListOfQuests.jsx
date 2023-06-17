import { v4 as uuidv4 } from "uuid";
const ListOfQuests = ({ allQuest, setCurrentQuest }) => {
  return (
    <article className="grid gap-2 h-[100px] sm:h-[500px] overflow-y-auto">
      {allQuest?.map((quest) => (
        <button key={uuidv4()}
          onClick={() => setCurrentQuest(quest)}
          className="bg-gray-200 py-2 capitalize hover:bg-gray-100 text-gray-700 hover:text-black"
        >
          {quest.name.toLowerCase()}
        </button>
      ))}
    </article>
  );
};
export default ListOfQuests;

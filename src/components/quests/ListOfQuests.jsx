const ListOfQuests = ({ allQuest, setCurrentQuest }) => {
  return (
    <article className="grid gap-2 h-[100px] sm:h-[500px] overflow-y-auto my-5">
      {allQuest?.map((quest) => (
        <button onClick={() => setCurrentQuest(quest)} className="bg-gray-100 py-2 capitalize">{quest.name.toLowerCase()}</button>
      ))}
    </article>
  );
};
export default ListOfQuests;

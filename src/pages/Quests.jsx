import { useEffect, useState } from "react";
import { axiosWarframe } from "../utils/configAxios";
import QuestCard from "../components/quests/QuestCard";
import ListOfQuests from "../components/quests/ListOfQuests";
import SectionComponent from "../components/fragmentsUtils/SectionComponent";

const Quests = () => {
  const [allQuest, setAllQuest] = useState([]);
  const [currentQuest, setCurrentQuest] = useState();
  useEffect(() => {
    axiosWarframe
      .get("/items")
      .then((res) => {
        const listQuests = res.data.filter((item) => item.category == "Quests");
        console.log(listQuests);
        setAllQuest(listQuests);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="w-full max-w-[1200px] mx-auto py-10 p-3">
      <h3 className="text-3xl tracking-[4px] text-red-600 my-10">QUESTS</h3>
      <section className="grid sm:grid-cols-[1fr,_2fr] gap-5 pb-10">
        <ListOfQuests allQuest={allQuest} setCurrentQuest={setCurrentQuest} />
        {currentQuest ? (
          <QuestCard currentQuest={currentQuest} />
        ) : (
          <div className="h-full min-h-[550px] relative flex justify-center items-center">
            <img
              className="h-full object-cover"
              src="/quests/questLoading.jpg"
              alt="warframeChallenge"
            />
            <span className="absolute bg-black/60 text-white p-10 text-2xl">
              SELECT A QUEST
            </span>
          </div>
        )}
      </section>
      <div className="grid gap-4 sm:grid-cols-2">
        {currentQuest?.components
          ? currentQuest.components.map((component) => (
              <SectionComponent component={component} />
            ))
          : ""}
      </div>
    </section>
  );
};
export default Quests;

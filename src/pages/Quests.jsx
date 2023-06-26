import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Loading from "../components/fragmentsUtils/Loading";
import SectionComponent from "../components/fragmentsUtils/SectionComponent";
import ListOfQuests from "../components/quests/ListOfQuests";
import QuestCard from "../components/quests/QuestCard";
import { axiosWarframe } from "../utils/configAxios";

const Quests = () => {
  const [allQuest, setAllQuest] = useState([]);
  const [currentQuest, setCurrentQuest] = useState();
  useEffect(() => {
    axiosWarframe
      .get("/items")
      .then((res) => {
        const listQuests = res.data.filter((item) => item.category == "Quests");
        setAllQuest(listQuests);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-3 pb-[120px] lg:mt-[60px]">
      <h2 className="text-4xl tracking-[5px] font-medium uppercase py-10">
        QUESTS
      </h2>
      {allQuest.length > 1 ? (
        <>
          <section className="grid sm:grid-cols-[1fr,_2fr] gap-5 pb-10">
            <ListOfQuests
              allQuest={allQuest}
              setCurrentQuest={setCurrentQuest}
            />
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
                  <SectionComponent component={component} key={uuidv4()} />
                ))
              : ""}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};
export default Quests;

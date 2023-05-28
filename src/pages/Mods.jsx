import { useEffect, useState } from "react";
import { axiosWarframe } from "../utils/configAxios";
import FormSearch from "../components/FormSearch";
import ModCard from "../components/mods/ModCard";
import { pagination } from "../utils/pagination,js";

const Mods = () => {
  const [allMods, setAllMods] = useState();
  const [modsToShow, setModsToShow] = useState();
  const [categories, setCategories] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBlock, setCurrentBlock] = useState(1);

  const { start, end, lastPage, pages } = pagination(
    25,
    currentPage,
    modsToShow
  );

  const {
    start: blockStart,
    end: blockEnd,
    lastPage: lastBlock,
  } = pagination(5, currentBlock, pages);

  const hanldePlussBlock = () => {
    const newBlock = currentBlock + 1;
    if (newBlock <= lastBlock) {
      setCurrentBlock(newBlock);
    }
  };
  const hanldeLessBlock = () => {
    const newBlock = currentBlock - 1;
    if (newBlock > 0) {
      setCurrentBlock(newBlock);
    }
  };

  useEffect(() => {
    axiosWarframe
      .get("mods")
      .then((res) => {
        setAllMods(res.data);
        setModsToShow(res.data);
      })
      .catch(() => console.log());
  }, []);
  useEffect(() => {
    if (allMods) {
      const listOfCategories = [];
      allMods.forEach((item) => {
        if (!listOfCategories.includes(item.type)) {
          listOfCategories.push(item.type);
        }
      });
      setCategories(listOfCategories);
    }
  }, [allMods]);
  

  return (
    <section className="w-full max-w-[1200px] mx-auto p-3">
        <h2 className="text-4xl tracking-[5px] font-medium uppercase py-10">ALL MODS</h2>
      <FormSearch
        allItems={allMods}
        setItemsToShow={setModsToShow}
        categories={categories}
        nameOfCategory={"type"}
        setCurrentPage={setCurrentPage}
        setCurrentBlock={setCurrentBlock}
      />

      <section className="grid grid-cols-[auto,_auto,_auto] gap-4 my-10">
        <button onClick={hanldeLessBlock}>{"<"}</button>
        <div className="flex items-center justify-center gap-2">
          {pages.slice(blockStart, blockEnd).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${
                currentPage == page ? "bg-red-600" : "bg-gray-200"
              } rounded-md p-3 aspect-square`}
            >
              {page}
            </button>
          ))}
        </div>
        <button onClick={hanldePlussBlock}>{">"}</button>
      </section>
      <section className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 auto-rows-fr justify-items-center">
        {modsToShow?.slice(start, end).map((mod) => (
          <ModCard key={mod.uniqueName + mod.name} mod={mod} />
        ))}
      </section>
    </section>
  );
};
export default Mods;

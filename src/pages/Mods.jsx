import { useEffect, useState } from "react";
import FormSearch from "../components/FormSearch";
import ImgHeader from "../components/ImgHeader";
import Loading from "../components/fragmentsUtils/Loading";
import ReosourceCard from "../components/resources/ReosourceCard";
import { axiosWarframe } from "../utils/configAxios";
import { pagination } from "../utils/pagination,js";
import PaginationBlocks from "./../components/PaginationBlocks";

const Mods = () => {
  const [allMods, setAllMods] = useState();
  const [modsToShow, setModsToShow] = useState();
  const [categories, setCategories] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBlock, setCurrentBlock] = useState(1);

  const { start, end, lastPage, pages } = pagination(
    24,
    currentPage,
    modsToShow
  );

  const {
    start: blockStart,
    end: blockEnd,
    lastPage: lastBlock,
  } = pagination(5, currentBlock, pages);

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
    <>
      <ImgHeader img={"/modsimg/ivara.jpg"} text={"GET READY FOR WAR!"} />
      <section className="w-full max-w-[1200px] mx-auto p-3 pb-[120px]">
        <h2 className="text-4xl tracking-[5px] font-medium uppercase py-10">
          ALL MODS
        </h2>
        <FormSearch
          allItems={allMods}
          setItemsToShow={setModsToShow}
          categories={categories}
          nameOfCategory={"type"}
          setCurrentPage={setCurrentPage}
          setCurrentBlock={setCurrentBlock}
        />
        <PaginationBlocks
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          currentBlock={currentBlock}
          setCurrentBlock={setCurrentBlock}
          startBlock={blockStart}
          endBlock={blockEnd}
          lastBlock={lastBlock}
        />
        {modsToShow ? (
          <section className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-4 auto-rows-fr justify-items-center">
            {modsToShow?.slice(start, end).map((mod) => (
              <ReosourceCard
                key={mod.uniqueName}
                resource={mod}
                path={"mods"}
                param={mod.name + "-" + mod.levelStats?.length}
              />
            ))}
          </section>
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
};
export default Mods;

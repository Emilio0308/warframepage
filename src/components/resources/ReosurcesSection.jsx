import { useEffect, useState } from "react";
import { pagination } from "../../utils/pagination,js";
import FormSearch from "../FormSearch";
import ReosourceCard from "./ReosourceCard";
import PaginationBlocks from "../PaginationBlocks";

const ReosurcesSection = ({ resources, categories , resourcesToShow , setResourcesToShow}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBlock, setCurrentBlock] = useState(1);
  const { start, end, lastPage, pages } = pagination(
    20,
    currentPage,
    resourcesToShow
  );
  const {
    start: startBlock,
    end: endBlock,
    lastPage: lastBlock,
  } = pagination(5, currentBlock, pages);

  useEffect(() => {
    setCurrentPage(1)
    setCurrentBlock(1)
  }, [resources])
  
  return (
    <>
      <FormSearch
        allItems={resources}
        categories={categories}
        nameOfCategory={"type"}
        setCurrentPage={setCurrentPage}
        setCurrentBlock={setCurrentBlock}
        setItemsToShow={setResourcesToShow}
      />
      <PaginationBlocks
        startBlock={startBlock}
        endBlock={endBlock}
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        currentBlock={currentBlock}
        lastBlock={lastBlock}
        setCurrentBlock={setCurrentBlock}
      />
      <section className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-4 auto-rows-fr">
        {resourcesToShow?.slice(start, end).map((resource) => (
          <ReosourceCard resource={resource} key={resource.uniqueName} />
        ))}
      </section>
    </>
  );
};
export default ReosurcesSection;

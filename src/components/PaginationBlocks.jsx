const PaginationBlocks = ({
  pages,
  startBlock,
  endBlock,
  setCurrentPage,
  currentPage,
  currentBlock,
  lastBlock,
  setCurrentBlock,
}) => {
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

  return (
    <div className="w-full grid grid-cols-[auto,_1fr,_auto] gap-4 justify-center items-center h-[60px] my-5">
      <button onClick={hanldeLessBlock}>{"<"}</button>
      <div className="flex gap-4 justify-center items-center">
        {pages.slice(startBlock, endBlock).map((page) => (
          <button key={page} className={`${currentPage == page ? "bg-red-600" : "bg-gray-200"} p-2 rounded-md`} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        ))}
      </div>
      <button onClick={hanldePlussBlock}>{">"}</button>
    </div>
  );
};
export default PaginationBlocks;

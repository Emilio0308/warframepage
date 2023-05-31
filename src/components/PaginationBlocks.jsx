const PaginationBlocks = ( { pages, startBlock , endBlock , setCurrentPage , currentBlock , lastBlock , setCurrentBlock } ) => {

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
    <div className="w-full flex gap-4 justify-center">
        <button onClick={hanldeLessBlock}>{"<"}</button>
      {pages.slice(startBlock, endBlock).map((page) => (
        <button key={page} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
      <button onClick={hanldePlussBlock}>{">"}</button>
    </div>
  );
};
export default PaginationBlocks;

import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

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
      <button onClick={hanldeLessBlock} className="text-3xl" ><FaRegArrowAltCircleLeft /></button>
      <div className="flex gap-3 justify-center items-center">
        {pages.slice(startBlock, endBlock).map((page) => (
          <button
            key={page}
            className={`${
              currentPage == page ? "bg-red-600" : "bg-gray-200"
            } rounded-md w-[25px] sm:w-[35px] h-[45px] shadow-md shadow-black/60 font-medium`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button onClick={hanldePlussBlock} className="text-3xl" ><FaRegArrowAltCircleRight /></button>
    </div>
  );
};
export default PaginationBlocks;

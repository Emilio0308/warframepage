import { imgUrl } from "../../utils/imgUrl";

const SentinelDetailModal = ({ currentSentinel, setShowDetailsModal }) => {
  const { url } = imgUrl(currentSentinel);
  console.log(currentSentinel);
  return (
    <article className=" w-full max-w-[480px] bg-gray-200 p-5 relative">
      <h4
        className={`${
          currentSentinel.isPrime
            ? "text-[#c79616] bg-black"
            : "text-white bg-red-600"
        } text-center uppercase py-2 tracking-[4px] font-semibold`}
      >
        {currentSentinel.name}
      </h4>
      <div>
        <img src={url} alt={currentSentinel.name} />
      </div>
      <p className="uppercase">{currentSentinel.description}</p>







      <button
        className="absolute aspect-square w-[30px] top-2 right-2 bg-black text-white rounded-full"
        onClick={() => setShowDetailsModal(false)}
      >
        X
      </button>
    </article>
  );
};
export default SentinelDetailModal;

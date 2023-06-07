import { imgUrl } from "../../utils/imgUrl";

const SentinelCard = ({ sentinel , setCurrentSentinel , setShowDetailsModal }) => {
  const { url } = imgUrl(sentinel);
    const showDetailsOfSentinel = () => {
        setCurrentSentinel(sentinel) 
        setShowDetailsModal( prev => !prev )
    }
  return (
    <article onClick={ showDetailsOfSentinel } className="grid justify-items-center bg-[#ececec]">
      <div>
        <img src={url} alt={sentinel.name} />
      </div>
      <h3
        className={`${
          sentinel.isPrime ? "text-[#c79616] bg-black" : "text-white bg-red-600"
        } font-semibold w-full text-center p-3 tracking-wider`}
      >
        {sentinel.name}
      </h3>
    </article>
  );
};
export default SentinelCard;

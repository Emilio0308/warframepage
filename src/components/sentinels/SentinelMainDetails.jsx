import { imgUrl } from "../../utils/imgUrl";

const SentinelMainDetails = ({ sentinelByName }) => {
  const { url } = imgUrl(sentinelByName);
  return (
    <article className="grid gap-5 max-w-[600px]">
      <h4
        className={`${
          sentinelByName.isPrime
            ? "text-[#c79616] bg-black"
            : "text-white bg-red-600"
        } text-center uppercase p-3 tracking-[4px] font-semibold text-2xl`}
      >
        {sentinelByName.name}
      </h4>
      <div className="flex justify-center items-center">
        <img src={url} alt={sentinelByName.name} loading="lazy" />
      </div>
      <div className="grid grid-cols-4 uppercase font-bold my-5">
        <div className="grid justify-items-center">
          <span
            className={`${
              sentinelByName.isPrime ? "text-[#c79616]" : "text-red-600"
            } text-2xl`}
          >
            {sentinelByName.armor}
          </span>
          <span>armor</span>
        </div>
        <div className="grid justify-items-center">
          <span
            className={`${
              sentinelByName.isPrime ? "text-[#c79616]" : "text-red-600"
            } text-2xl`}
          >
            {sentinelByName.health}
          </span>
          <span>health</span>
        </div>
        <div className="grid justify-items-center">
          <span
            className={`${
              sentinelByName.isPrime ? "text-[#c79616]" : "text-red-600"
            } text-2xl`}
          >
            {sentinelByName.power}
          </span>
          <span>power</span>
        </div>
        <div className="grid justify-items-center">
          <span
            className={`${
              sentinelByName.isPrime ? "text-[#c79616]" : "text-red-600"
            } text-2xl`}
          >
            {sentinelByName.shield}
          </span>
          <span>shield</span>
        </div>
      </div>
      <p className="uppercase">{sentinelByName.description}</p>
    </article>
  );
};
export default SentinelMainDetails;

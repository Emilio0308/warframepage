const FactionReward = ({ factionReward }) => {
  return (
    <div className="grid p-2 grid-rows-[30px,_60px,_40px]">
      <span className="text-center">{factionReward.faction}</span>
      <div className="h-full">
        <img
          loading="lazy"
          className="select-none h-full object-contain mx-auto"
          id="factionReward"
          src={factionReward.reward.thumbnail}
          alt={factionReward.reward.thumbnail}
        />
      </div>
      <span className="text-sm">{factionReward.reward.asString}</span>
    </div>
  );
};
export default FactionReward;

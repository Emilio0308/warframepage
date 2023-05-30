const FactionReward = ( { factionReward } ) => {
  return (
    <div className="grid p-2 grid-rows-[30px,_60px,_40px]">
        <span className="text-center">{factionReward.faction}</span>
        <div>
            <img className="select-none" id="factionReward" src={factionReward.reward.thumbnail} alt={factionReward.reward.thumbnail} />
        </div>
        <span className="text-sm">{factionReward.reward.asString}</span>
    </div>
  )
}
export default FactionReward
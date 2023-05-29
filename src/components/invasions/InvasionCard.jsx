import FactionReward from "./FactionReward";

const InvasionCard = ({ invasion }) => {
  return (
    <article className="w-[250px] bg-white">
      <div className="grid justify-items-center border-b-2">
        <span>Time left: {invasion.eta}</span>
        <span>{invasion.desc}</span>
        <span>{invasion.nodeKey}</span>
      </div>
      <div className="grid grid-cols-2 relative">
        <FactionReward factionReward={invasion.attacker} />
        <div className="h-[80%] w-[2px] absolute bg-gray-200 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"></div>
        <FactionReward factionReward={invasion.defender} />
      </div>
    </article>
  );
};
export default InvasionCard;

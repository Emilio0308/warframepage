const LevelStatsMod = ({ levelStats, i }) => {
  console.log(levelStats);
  return (
    <div className="grid sm:grid-cols-[150px,_1fr]">
      <span className="bg-black text-white p-2 flex justify-center items-center">{i + 1}° stat</span>
      <span className="sm:px-10">{levelStats.stats[0]}</span>
    </div>
  );
};
export default LevelStatsMod;

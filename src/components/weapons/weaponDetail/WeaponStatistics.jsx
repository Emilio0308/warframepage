const WeaponStatistics = ( { currentWeapon } ) => {
  return (
    <article className="grid my-10 gap-4">
      <span className="text-2xl">Statistics</span>
      <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
        <span>accuracy</span>
        <span>{currentWeapon?.accuracy}</span>
      </div>
      <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
        <span>fireRate</span>
        <span>{currentWeapon?.fireRate}</span>
      </div>
      <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
        <span>noise</span>
        <span>{currentWeapon?.noise}</span>
      </div>
      <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
        <span>totalDamage</span>
        <span>{currentWeapon?.totalDamage}</span>
      </div>
      <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
        <span>criticalChance</span>
        <span>{currentWeapon?.criticalChance}</span>
      </div>
      <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
        <span>criticalMultiplier</span>
        <span>{currentWeapon?.criticalMultiplier}</span>
      </div>
      <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
        <span>reloadTime</span>
        <span>{currentWeapon?.reloadTime}</span>
      </div>
    </article>
  );
};
export default WeaponStatistics;

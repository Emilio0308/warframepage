import SectionTitle from "../../fragmentsUtils/SectionTitle";

const WeaponStatistics = ( { currentWeapon } ) => {
  return (
    <article className="grid my-10 gap-4 shadow-xl shadow-black/10 p-3 pb-8">
      <SectionTitle title={"Statistics"} />
      <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
        <span>accuracy</span>
        <span>{currentWeapon?.accuracy?.toFixed(2)}</span>
      </div>
      <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
        <span>fireRate</span>
        <span>{currentWeapon?.fireRate?.toFixed(2)}</span>
      </div>
      <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
        <span>noise</span>
        <span>{currentWeapon?.noise}</span>
      </div>
      <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
        <span>totalDamage</span>
        <span>{currentWeapon?.totalDamage?.toFixed(2)}</span>
      </div>
      <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
        <span>criticalChance</span>
        <span>{currentWeapon?.criticalChance?.toFixed(2)}</span>
      </div>
      <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
        <span>criticalMultiplier</span>
        <span>{currentWeapon?.criticalMultiplier?.toFixed(2)}</span>
      </div>
      <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
        <span>reloadTime</span>
        <span>{currentWeapon?.reloadTime?.toFixed(2)}</span>
      </div>
    </article>
  );
};
export default WeaponStatistics;

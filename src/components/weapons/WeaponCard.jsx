import { getUrl } from "../../utils/getUrlImg"

const WeaponCard = ( { weapon , setCurrentWeapon } ) => {
  const {urlWithoutQueryParams} = getUrl(weapon.wikiaThumbnail)
  return (
    <article onClick={() => setCurrentWeapon (weapon)} 
    className="cursor-pointer shadow-md shadow-black/40 grid grid-rows-[20px,_90px] justify-items-center aspect-square border-[2px] border-transparent hover:border-red-500">
      <span className="text-xs border-b border-gray-700">{weapon.name}</span>
      <div className="h-full w-full">
        <img className="object-contain h-full mx-auto" src={urlWithoutQueryParams} alt="" />
      </div>
    </article>
  )
}
export default WeaponCard
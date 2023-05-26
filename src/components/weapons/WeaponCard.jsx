import { getUrl } from "../../utils/getUrlImg"

const WeaponCard = ( { weapon , setCurrentWeapon } ) => {
  const {urlWithoutQueryParams} = getUrl(weapon.wikiaThumbnail)
  return (
    <article onClick={() => setCurrentWeapon (weapon)} 
    className="cursor-pointer shadow-md shadow-black/40 grid grid-rows-[30px,_1fr] justify-items-center border-[2px] border-transparent hover:border-red-500">
      <span className="w-[80%] text-center border-b border-gray-700">{weapon.name}</span>
      <div className="h-full w-full">
        <img download="lazy" className="object-contain h-full mx-auto" src={urlWithoutQueryParams} alt={weapon.name} />
      </div>
    </article>
  )
}
export default WeaponCard
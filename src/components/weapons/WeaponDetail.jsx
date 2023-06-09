import { imgUrl } from "../../utils/imgUrl"

const WeaponDetail = ( {currentWeapon} ) => {
    const { url } = imgUrl(currentWeapon)
  return (
    <article>
        <article className="py-5 flex flex-col gap-4">
            <h5 className={`text-2xl tracking-[4px] uppercase font-semibold ${currentWeapon?.isPrime? "text-[#c79616]" : "text-red-600"}`}>{currentWeapon?.name}</h5>
            <div className="w-full">
                <img download="lazy" className="mx-auto" src={ url } alt={currentWeapon?.name} />
            </div>
            <div className="grid grid-cols-3 gap-2 text-white">
                <div className="grid grid-rows-2 justify-items-center bg-gray-700 rounded-md">
                    <span>impact</span>
                    <span>{currentWeapon?.damage?.impact.toFixed(2)}</span>
                </div>
                <div className="grid grid-rows-2 justify-items-center bg-gray-700 rounded-md">
                    <span>slash</span>
                    <span>{currentWeapon?.damage?.slash.toFixed(2)}</span>
                </div>
                <div className="grid grid-rows-2 justify-items-center bg-gray-700 rounded-md">
                    <span>puncture</span>
                    <span>{currentWeapon?.damage?.puncture.toFixed(2)}</span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2 text-xs">
                <div className="grid grid-rows-2 justify-items-center p-2 rounded-md bg-red-500">
                    <span>heat</span>
                    <span>{currentWeapon?.damage?.heat}</span>
                </div>
                <div className="grid grid-rows-2 justify-items-center p-2 rounded-md bg-sky-600">
                    <span>cold</span>
                    <span>{currentWeapon?.damage?.cold}</span>
                </div>
                <div className="grid grid-rows-2 justify-items-center p-2 rounded-md bg-yellow-400">
                    <span>electricity</span>
                    <span>{currentWeapon?.damage?.electricity}</span>
                </div>
                <div className="grid grid-rows-2 justify-items-center p-2 rounded-md bg-lime-800">
                    <span>toxin</span>
                    <span>{currentWeapon?.damage?.toxin}</span>
                </div>
            </div>
        </article>
        <p className="py-5">
            {currentWeapon?.description}
        </p>
    </article>
  )
}
export default WeaponDetail
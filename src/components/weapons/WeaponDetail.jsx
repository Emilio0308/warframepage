import { useState } from "react"
import { getUrl } from "../../utils/getUrlImg"

const WeaponDetail = ( {currentWeapon} ) => {
    const [show, setShow] = useState(true)
    const {urlWithoutQueryParams} = getUrl(currentWeapon.wikiaThumbnail)
  return (
    <article>
        <article className="py-5 flex flex-col gap-4">
            <h5 className="text-2xl tracking-[2px]">{currentWeapon.name}</h5>
            <div className="w-full">
                <img className="mx-auto" src={urlWithoutQueryParams} alt="" />
            </div>
            <div className="grid grid-cols-3 gap-2 text-white">
                <div className="grid grid-rows-2 justify-items-center bg-gray-700 rounded-md">
                    <span>impact</span>
                    <span>{currentWeapon.damage.impact}</span>
                </div>
                <div className="grid grid-rows-2 justify-items-center bg-gray-700 rounded-md">
                    <span>slash</span>
                    <span>{currentWeapon.damage.slash}</span>
                </div>
                <div className="grid grid-rows-2 justify-items-center bg-gray-700 rounded-md">
                    <span>puncture</span>
                    <span>{currentWeapon.damage.puncture}</span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
                <div className="grid grid-rows-2 justify-items-center rounded-md bg-red-500">
                    <span>heat</span>
                    <span>{currentWeapon.damage.heat}</span>
                </div>
                <div className="grid grid-rows-2 justify-items-center rounded-md bg-sky-600">
                    <span>cold</span>
                    <span>{currentWeapon.damage.cold}</span>
                </div>
                <div className="grid grid-rows-2 justify-items-center rounded-md bg-yellow-400">
                    <span>electricity</span>
                    <span>{currentWeapon.damage.electricity}</span>
                </div>
                <div className="grid grid-rows-2 justify-items-center rounded-md bg-lime-800">
                    <span>toxin</span>
                    <span>{currentWeapon.damage.toxin}</span>
                </div>
            </div>
        </article>

        <p className="py-5">
            {currentWeapon.description}
        </p>

        <article className="grid my-10 gap-4">
            <span className="text-2xl">Statistics</span>
            <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
                <span>accuracy</span>
                <span>{currentWeapon.accuracy}</span>
            </div>
            <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
                <span>fireRate</span>
                <span>{currentWeapon.fireRate}</span>
            </div>
            <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
                <span>noise</span>
                <span>{currentWeapon.noise}</span>
            </div>
            <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
                <span>totalDamage</span>
                <span>{currentWeapon.totalDamage}</span>
            </div>
            <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
                <span>criticalChance</span>
                <span>{currentWeapon.criticalChance}</span>
            </div>
            <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
                <span>criticalMultiplier</span>
                <span>{currentWeapon.criticalMultiplier}</span>
            </div>
            <div className="grid grid-cols-2 border-[1px] border-gray-700 p-3">
                <span>reloadTime</span>
                <span>{currentWeapon.reloadTime}</span>
            </div>
        </article>
        <article className="flex flex-col gap-4">
            <span className="text-2xl">Components</span>
            <section className="grid gap-4">
                {
                    currentWeapon.components?.map( (component) => 
                    <div key={component.uniqueName} className="border-[1px] border-gray-700 p-3 grid gap-5
                     bg-gray-700 text-white rounded-md shadow-md shadow-black">
                        <div onClick={ ()=> setShow(!show)} className="grid grid-cols-2 gap-4 justify-items-center">
                        <span>{component.name} {">"}</span>
                            <span>{component.description}</span>
                        </div>
                        <div className={`grid gap-2 ${show? "h-auto" : "h-0 invisible"}`}>
                        {
                                component.drops.map( (drop) => 
                                <div key={drop.location}
                                className="grid grid-cols-2 justify-items-center items-center border-[1px] border-gray-300">
                                    <span className="text-center p-2">{drop.location}</span>
                                    <span className="p-2">{drop.chance}</span>
                                </div>)
                            }
                        </div>
                    </div>)
                }
            </section>
        </article>
    </article>
  )
}
export default WeaponDetail
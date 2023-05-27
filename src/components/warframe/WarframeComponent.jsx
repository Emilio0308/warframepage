const WarframeComponent = ( { component } ) => {
    const util = component
    console.log(util)
  return (
    <article className="grid border-[1px] border-gray-700 p-3 gap-4 bg-gray-700/80 text-white">
        <span className="text-center border-b border-gray-300">{component.name}</span>
        <div className=" grid grid-cols-2">
            <span className="text-center">location</span>
            <span className="text-center">{component.drops[0]?.location ?? "--"}</span>
        </div>
        <div className=" grid grid-cols-2">
            <span className="text-center">chance</span>
            <span className="text-center">{component.drops[0]?.chance ?? "--"}</span>
        </div>
        <div className=" grid grid-cols-2">
            <span className="text-center">rarity</span>
            <span className="text-center">{component.drops[0]?.rarity ?? "--"}</span>
        </div>
    </article>
  )
}
export default WarframeComponent
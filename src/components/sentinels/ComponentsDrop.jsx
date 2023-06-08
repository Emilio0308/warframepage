const ComponentsDrop = ( { drop }) => {
  return (
    <div className="border-b-2 bg-black/10 p-2">
        <h5 className="font-medium">{drop.location}</h5>
        <div className="grid grid-rows-2">
            <div className="flex justify-between">
                <span>rarity</span>
                <span>{drop.rarity}</span>
            </div>
            <div className="flex justify-between">
                <span>chance</span>
                <span>{drop.chance}</span>
            </div>
        </div>
    </div>
  )
}
export default ComponentsDrop
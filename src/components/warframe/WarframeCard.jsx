import { Link } from "react-router-dom";

const WarframeCard = ( { warframe } ) => {

    const url = warframe?.wikiaThumbnail
    const extension = ".png";
    const urlWithoutQueryParams = url?.split(extension)[0] + extension;
    

  return (
    <Link to={`/warframes/${warframe.name}`} className={`border-[1px] ${warframe.isPrime ? "border-amber-400" : "border-gray-700" }  grid justify-center items-center shadow-md shadow-black/30`}>
        <h4 className={`text-center py-3 border-b-2 ${warframe.isPrime ? "border-amber-400" : "border-gray-700" }`}>{warframe.name}</h4>
        <div>
            <img src={urlWithoutQueryParams} alt={warframe.name} />
        </div>

    </Link>
  )
}
export default WarframeCard
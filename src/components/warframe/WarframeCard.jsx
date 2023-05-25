import { Link } from "react-router-dom";

const WarframeCard = ( { warframe } ) => {

    const url = warframe?.wikiaThumbnail
    const extension = ".png";
    const urlWithoutQueryParams = url?.split(extension)[0] + extension;
    

  return (
    <Link to={`/warframes/${warframe.name}`} className={`border-[3px] ${warframe.isPrime ? "border-amber-300" : "border-gray-400" }  grid justify-center items-center`}>
        <h4 className={`text-center py-3 border-b-2 ${warframe.isPrime ? "border-amber-300" : "border-gray-400" }`}>{warframe.name}</h4>
        <div>
            <img src={urlWithoutQueryParams} alt={warframe.name} />
        </div>

    </Link>
  )
}
export default WarframeCard
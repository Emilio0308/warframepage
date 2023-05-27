import { imgUrl } from "../../utils/imgUrl";

const WarframeCard = ( { warframe } ) => {

    // const url = warframe?.wikiaThumbnail
    // const extension = ".png";
    // const urlWithoutQueryParams = url?.split(extension)[0] + extension;

    const { url } = imgUrl( warframe )
    

  return (
    <a href={`/warframes/${warframe.name}`} 
    className={`border-[3px] ${warframe.isPrime ? "border-amber-400" : "border-red-600" }  grid justify-center items-center shadow-md shadow-black/30 bg-black gap-8`}>
        <h4 className={`text-center py-3 border-b-2 ${warframe.isPrime ? "border-amber-400 text-amber-400" : "border-red-600 text-red-600" }`}>{warframe.name}</h4>
        <div>
            <img src={ url } alt={warframe.name} />
        </div>

    </a>
  )
}
export default WarframeCard
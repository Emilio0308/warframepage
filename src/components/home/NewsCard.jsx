import { getDate } from "../../utils/getDate"

const NewsCard = ( { newInfo }) => {
  

  return (
    <article className="grid grid-rows-[1fr,_100px] shadow-md shadow-black overflow-hidden bg-black/90">
        
        <div className="w-full h-full overflow-hidden relative">
            <img download="lazy" className="w-full h-full object-cover" src={newInfo.imageLink} alt="warframe news" />
            <span className="absolute left-2 bottom-2 text-white">{getDate(newInfo.date)}</span>
        </div>
        <div className="p-2 text-lg w-full text-ellipsis text-white relative">
          <span>{newInfo.message}</span>
          <a className="absolute right-2 bottom-2" target="_blank" href={newInfo.link}>View more</a>
        </div>
    </article>
  )
}
export default NewsCard
const NewsCard = ( { newInfo }) => {
  return (
    <article className="grid grid-rows-[100px,_1fr] shadow-md shadow-black/40 overflow-hidden">
        <span className="p-2 text-xs w-full text-ellipsis text">{newInfo.message}</span>
        <div className="w-full h-full overflow-hidden">
            <img className=" w-full h-full object-cover" src={newInfo.imageLink} alt="" />
        </div>
    </article>
  )
}
export default NewsCard
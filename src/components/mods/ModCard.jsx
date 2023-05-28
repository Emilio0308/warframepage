import { imgUrl } from "../../utils/imgUrl"

const ModCard = ( { mod } ) => {
    const {url} = imgUrl(mod)
    
  return (
    <article className="grid grid-rows-[1fr,_60px] bg-black max-w-[256px] w-full">
        <div className="w-full h-full">
            <img className="h-full object-contain mx-auto" src={url} alt={mod.name} />
        </div>
        <h3 className="bg-black grid content-center text-white p-2 font-medium hover:text-red-600 hover:bg-gray-300">{mod.name}</h3>
    </article>
  )
}
export default ModCard
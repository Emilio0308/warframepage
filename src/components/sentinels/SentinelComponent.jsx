import { imgUrl } from "../../utils/imgUrl"
import ComponentsDrop from "./ComponentsDrop"

const SentinelComponent = ({ component }) => {
    const { url } = imgUrl(component)
  return (
    <div>
        <h5 className="bg-black text-white p-3 uppercase tracking-wide">{component.name}</h5>
        <article className="grid grid-cols-[auto,_1fr]">
            <div className="w-[100px] flex justify-center items-center">
                <img src={url} alt="" />
            </div>
            <section className="h-[200px] overflow-y-auto grid gap-2">
                {
                    component.drops?.map((drop) => <ComponentsDrop drop={ drop }/> )
                }
            </section>
        </article>
    </div>
  )
}
export default SentinelComponent
import { useEffect, useState } from "react"
import { axiosWarframe } from "../utils/configAxios"
import WarframeCard from "../components/warframe/WarframeCard"

const Warframe = () => {

    const [warframes, setWarframes] = useState()
    useEffect(() => {
      axiosWarframe.get("warframes")
      .then( (res) => {
        const listWarframes = res.data.filter( (warframe) => warframe.category == "Warframes" && warframe.productCategory == "Suits")
        setWarframes(listWarframes)
      })
      .catch( () => console.log())
    }, [])
    
  return (
    <section className="max-w-[1024px] mx-auto my-[100px] p-3">
        <h2 className="text-2xl py-10">Warframes</h2>
        <section className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-5">
            {
                warframes?.map( (warframe)=> <WarframeCard key={warframe.uniqueName} warframe={warframe} /> )
            }
        </section>
    </section>
  )
}
export default Warframe
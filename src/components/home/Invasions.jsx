import { useEffect, useState } from "react"
import { axiosWarframe } from "../../utils/configAxios"
// import InvasionCard from "../invasions/InvasionCard"

const Invasions = () => {
    const [ivasionas, setIvasionas] = useState()
    useEffect(() => {
      axiosWarframe.get("pc/en/invasions/")
      .then((res) => {
        console.log(res.data)
        setIvasionas(res.data)
      })
      .catch(() => console.log())
    }, [])
    
  return (
    <section className="w-full max-w-[1200px] mx-auto grid grid-rows-[auto,_1fr]">
        <h3 className="uppercase py-5">invasions</h3>
        <section className="w-full border-8 relative h-[240px] overflow-hidden">
            <div className="grid gap-4 grid-rows-1 grid-flow-col-dense absolute left-[00%]">
                {/* {
                   ivasionas?.map( (invasion) => <InvasionCard key={invasion.id} invasion={invasion}/>) 
                } */}
            </div>
        </section>
    </section>
  )
}
export default Invasions
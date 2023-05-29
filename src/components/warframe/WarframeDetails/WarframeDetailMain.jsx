import { imgUrl } from "../../../utils/imgUrl"

const WarframeDetailMain = ( { warframeName }) => {
  const { url } = imgUrl( warframeName )
  return (
    <article className="grid justify-items-center bg-black/80 text-white px-5 py-14 gap-6">
            <div className="grid gap-4">
              <div className="grid grid-cols-[1fr,_auto] text-xl gap-4">
                <h3 className="font-medium uppercase text-3xl">{warframeName?.name}</h3>
                <span className="text-center">{"(" + warframeName?.aura + ")"}</span>
              </div>
              <div
                className={`${
                  warframeName?.isPrime ? "border-[#c79616]" : "border-red-600"
                } border-[3px] max-w-[400px]`}
              >
                <img
                  className="w-full h-full"
                  src= { url }
                  alt={warframeName?.name}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 w-full mx-auto">
              <div className="grid justify-center">
                <span className={`text-center text-2xl font-bold ${warframeName?.isPrime? "text-[#c79616]" : "text-red-600"}`}>{warframeName?.health}</span>
                <span className="uppercase">health</span>
              </div>
              <div className="grid justify-center">
                <span className={`text-center text-2xl font-bold ${warframeName?.isPrime? "text-[#c79616]" : "text-red-600"}`}>{warframeName?.armor}</span>
                <span className="uppercase">armor</span>
              </div>
              <div className="grid justify-center">
                <span className={`text-center text-2xl font-bold ${warframeName?.isPrime? "text-[#c79616]" : "text-red-600"}`}>{warframeName?.power}</span>
                <span className="uppercase">power</span>
              </div>
              <div className="grid justify-center">
                <span className={`text-center text-2xl font-bold ${warframeName?.isPrime? "text-[#c79616]" : "text-red-600"}`}>{warframeName?.shield}</span>
                <span className="uppercase">shield</span>
              </div>
            </div>
            <article className="flex text-white justify-center items-center text-xl mix-blend-difference uppercase">
              <p>{warframeName?.description}</p>
            </article>
          </article>
  )
}
export default WarframeDetailMain
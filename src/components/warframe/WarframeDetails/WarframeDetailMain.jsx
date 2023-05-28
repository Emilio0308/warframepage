import { imgUrl } from "../../../utils/imgUrl"

const WarframeDetailMain = ( { warframeName }) => {
  const { url } = imgUrl( warframeName )
  return (
    <article className="grid justify-items-center">
            <div className="grid gap-4 py-24">
              <div className="grid grid-cols-2 text-xl">
                <h3 className="font-medium uppercase">{warframeName?.name}</h3>
                <span className="text-center">{"( " + warframeName?.aura + " )"}</span>
              </div>
              <div
                className={`${
                  warframeName?.isPrime ? "border-amber-300" : "border-red-600"
                } border-[3px] bg-black/60 max-w-[400px]`}
              >
                <img
                  className="w-full h-full"
                  src= { url }
                  alt={warframeName?.name}
                />
              </div>
            </div>
            <article className="flex text-white justify-center items-center p-4 text-xl mix-blend-difference">
              <p>{warframeName?.description}</p>
            </article>
          </article>
  )
}
export default WarframeDetailMain
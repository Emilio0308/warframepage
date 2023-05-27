const WarframeDetailMain = ( { warframeName , urlWithoutQueryParams }) => {
  return (
    <article className="grid justify-items-center">
            <div className="grid gap-4 p-10">
              <div className="flex gap-9 justify-center text-xl">
                <h3 className="font-medium">{warframeName?.name}</h3>
                <span>{"( " + warframeName?.aura + " )"}</span>
              </div>
              <div
                className={`${
                  warframeName?.isPrime ? "border-amber-300" : "border-gray-700"
                } border-[3px] bg-gray-900 shadow-md shadow-black`}
              >
                <img
                  className="w-full h-full"
                  src={urlWithoutQueryParams}
                  alt={warframeName?.name}
                />
              </div>
            </div>
            <article className="flex justify-center items-center p-4">
              <p>{warframeName?.description}</p>
            </article>
          </article>
  )
}
export default WarframeDetailMain
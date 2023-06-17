const BasicStatistic = ( { element }) => {
  return (
    <div className="grid grid-cols-4 uppercase font-bold my-5">
      <div className="grid justify-items-center">
        <span
          className={`${
            element.isPrime ? "text-[#c79616]" : "text-red-600"
          } text-2xl`}
        >
          {element.armor}
        </span>
        <span>armor</span>
      </div>
      <div className="grid justify-items-center">
        <span
          className={`${
            element.isPrime ? "text-[#c79616]" : "text-red-600"
          } text-2xl`}
        >
          {element.health}
        </span>
        <span>health</span>
      </div>
      <div className="grid justify-items-center">
        <span
          className={`${
            element.isPrime ? "text-[#c79616]" : "text-red-600"
          } text-2xl`}
        >
          {element.power}
        </span>
        <span>power</span>
      </div>
      <div className="grid justify-items-center">
        <span
          className={`${
            element.isPrime ? "text-[#c79616]" : "text-red-600"
          } text-2xl`}
        >
          {element.shield}
        </span>
        <span>shield</span>
      </div>
    </div>
  )
}
export default BasicStatistic
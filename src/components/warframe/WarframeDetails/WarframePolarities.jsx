const WarframePolarities = ( { warframeName }) => {
  return (
    <article className="py-10 flex flex-col justify-around gap-5 row-start-2 col-start-1">
      <div className="col-span-2 w-full grid grid-cols-[1fr,_auto,_1fr] items-center">
        <div className="w-full h-[2px] bg-red-600"></div>
        <h4 className="text-center font-medium text-3xl p-4 uppercase tracking-[4px] text-red-600">Polarities</h4>
        <div className="w-full h-[2px] bg-red-600"></div>
      </div>
      <div className="grid grid-cols-2 w-full gap-4 justify-items-center">
        {warframeName?.polarities.map((polarity , i) => (
          <span
            key={polarity + i}
            className="bg-gray-700 w-full max-w-xl rounded-md text-center capitalize text-white py-5"
          >
            {polarity}
          </span>
        ))}
      </div>
    </article>
  );
};
export default WarframePolarities;

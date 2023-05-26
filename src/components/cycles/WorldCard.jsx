const WorldCard = ({ world }) => {
  return (
    <article className="shadow-md shadow-black bg-gray-50 p-5">
      <div className="grid grid-cols-3 justify-items-center items-center my-5">
        <div className="h-[3px] w-full bg-sky-700"></div>
        <h4 className="uppercase text-center">{world.id.split("Cycle")[0] + " Cycle"}</h4>
        <div className="h-[3px] w-full bg-sky-700"></div>
      </div>
      <article className="grid gap-2">
        <div className="grid grid-cols-2 ">
          <span>Status</span>
          <span className="text-center">{world.state}</span>
        </div>
        <div className="grid grid-cols-2 ">
          <span>timeLeft</span>
          <span className="text-center">{world.timeLeft}</span>
        </div>
        <div className="grid grid-cols-2 ">
          <span>activation</span>
          <span className="text-center">{new Date(world.activation).toLocaleString()}</span>
        </div>
        <div className="grid grid-cols-2 ">
          <span>expiry</span>
          <span className="text-center">{new Date(world.expiry).toLocaleString()}</span>
        </div>
        {
            world.shortString? 
            <div className="grid w-full bg-black/90 text-white p-3 rounded-md">
                <span className="text-center">{world.shortString}</span>
            </div>
            : ""
        }
      </article>
    </article>
  );
};
export default WorldCard;

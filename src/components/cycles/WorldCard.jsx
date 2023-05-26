const WorldCard = ({ world }) => {
  return (
    <article className="bg-black p-5 text-white">
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
            <div className="grid w-full bg-gray-800 text-white p-3">
                <span className="text-center">{world.shortString}</span>
            </div>
            : ""
        }
      </article>
    </article>
  );
};
export default WorldCard;

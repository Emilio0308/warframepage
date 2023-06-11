const Loading = () => {
  return (
    <section className="h-[500px] w-full flex justify-center items-center gap-5 sm:gap-10">
      <span className="text-5xl sm:text-6xl capitalize text-gray-600 font-extrabold">
        loading
      </span>
      <div className="bg-gray-600 aspect-square h-[20px] sm:h-[50px] rounded-full animate-ping"></div>
      <div className="bg-gray-600 aspect-square h-[20px] sm:h-[50px] rounded-full animate-ping"></div>
      <div className="bg-gray-600 aspect-square h-[20px] sm:h-[50px] rounded-full animate-ping"></div>
    </section>
  );
};
export default Loading;

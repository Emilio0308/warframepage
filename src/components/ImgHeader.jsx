const ImgHeader = ( { img , text } ) => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden flex justify-center items-center">
      <img
        className="min-h-[500px] max-w-none w-full object-cover"
        src={img}
        alt="all warframes"
      />
      <span className="absolute w-full text-center bottom-8 text-gray-100 text-4xl sm:text-6xl tracking-[10px]">
        {text}
      </span>
    </div>
  );
};
export default ImgHeader;

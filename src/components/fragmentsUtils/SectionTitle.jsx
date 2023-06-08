const SectionTitle = ( { title } ) => {
  return (
    <div className="w-full grid grid-cols-[1fr,_auto,_1fr] items-center">
      <span className="w-full h-[2px] bg-red-600"></span>
      <h4 className="uppercase text-center font-medium text-3xl p-4 tracking-[4px] text-red-600">
        {title}
      </h4>
      <span className="w-full h-[2px] bg-red-600"></span>
    </div>
  );
};
export default SectionTitle;

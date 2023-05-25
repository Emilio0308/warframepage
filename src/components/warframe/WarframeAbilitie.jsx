const WarframeAbilitie = ( { abilitie } ) => {
  return (
    <div
      className="grid grid-cols-[120px,_auto] border-[1px] border-gray-700 items-center justify-items-center p-3 gap-4"
    >
      <span className="w-full py-10 text-center border-r border-gray-300">{abilitie.name}</span>
      <p>{abilitie.description}</p>
    </div>
  );
};
export default WarframeAbilitie;

const WarframeAbilitie = ({ abilitie, warframeName }) => {
  const getPathImgAbilitie = () => {
    const name =
      warframeName.split(" ")[0] + "-" + abilitie.name.split(" ").join("");
    const url = `https://warframe-web-assets.nyc3.cdn.digitaloceanspaces.com/images/warframes/abilities/${name.toLowerCase()}.png`;
    return url;
  };

  const abilitieUrl = getPathImgAbilitie()
  return (
    <div
      className="grid grid-rows-[1fr,_150px] shadow-md items-center justify-items-center
      p-3 gap-4 "
    >
      <div className="text-center border-r border-gray-300">
        <img src={abilitieUrl} alt="abilitieUrl" />
        <span className="w-full uppercase">{abilitie.name}</span>
      </div>
      <p className="h-full">{abilitie.description}</p>
    </div>
  );
};
export default WarframeAbilitie;

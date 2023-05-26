import { useEffect, useState } from "react";
import { axiosWarframe } from "../utils/configAxios";
import WarframeCard from "../components/warframe/WarframeCard";

const Warframe = () => {
  const [warframes, setWarframes] = useState();
  const [warframeName, setWarframeName] = useState("")
  const [warframesToShow, setWarframesToShow] = useState()

  const handleClickWriteWarframe = (e) => {
    setWarframeName(e.target.value)
  }
  const handleClickSearchWarframe = (e) => {
    e.preventDefault()
    if (warframeName) {
      const newListOfWarframes = warframes.filter( ( warframe ) => warframe.name.toLowerCase().includes(warframeName.toLowerCase()))
      setWarframesToShow(newListOfWarframes)
      setWarframeName("")
    }
  }
  const handleViewAll = (e) => {
    e.preventDefault()
    setWarframesToShow(warframes)
    setWarframeName("")
  }
  useEffect(() => {
    axiosWarframe
      .get("warframes")
      .then((res) => {
        const listWarframes = res.data.filter(
          (warframe) =>
            warframe.category == "Warframes" &&
            warframe.productCategory == "Suits"
        );
        setWarframes(listWarframes);
        setWarframesToShow(listWarframes)
      })
      .catch(() => console.log());
  }, []);
  

  return (
    <>
      <div className="relative h-[410px] w-full overflow-hidden flex justify-center items-center">
        <img className="max-h-[410px] max-w-none" src="/warframes/warframes.jpg" alt="all warframes" />
        <span className="absolute w-full text-center bottom-8 text-gray-100 text-3xl sm:text-6xl tracking-[10px]">WELCOME TENNO</span>
      </div>
      <section className="max-w-[1200px] w-full mx-auto p-3 flex flex-col gap-10">
        <h2 className="text-4xl tracking-[5px] font-medium uppercase py-10">Warframes</h2>
        <form className="flex gap-5 flex-wrap">
          <div className="flex-grow shadow-md">
            <input placeholder="Search your warframe..." onChange={handleClickWriteWarframe} value={warframeName} className="w-full h-[60px] px-5" type="text" />
          </div>
          <button onClick={handleClickSearchWarframe} className="h-[60px]">search</button>
          <button onClick={ handleViewAll}>VIEW ALL</button>
        </form>
        <section className="grid grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] gap-5">
          {warframesToShow?.map((warframe) => (
            <WarframeCard key={warframe.uniqueName} warframe={warframe} />
          ))}
        </section>
      </section>
    </>
  );
};
export default Warframe;

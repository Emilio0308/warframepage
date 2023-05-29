import { useEffect, useState } from "react";
import { axiosWarframe } from "../utils/configAxios";
import WarframeCard from "../components/warframe/WarframeCard";
import ImgHeader from "../components/ImgHeader";

const Warframe = () => {
  const [warframes, setWarframes] = useState();
  const [warframeName, setWarframeName] = useState("")
  const [warframesToShow, setWarframesToShow] = useState()
  const [listOfCoincidences, setListOfCoincidences] = useState()

  const handleClickWriteWarframe = (e) => {
    setWarframeName(e.target.value)
  }
  // aislamos la funcion de filtar por nombre para poder llamar a esta funcion tanto al dar al botom de buscar como a un item de la lista de coincidencias
  const searchWarframe = (warframeName) => {
      const newListOfWarframes = warframes.filter( ( warframe ) => warframe.name.toLowerCase().includes( warframeName.toLowerCase()))
      setWarframesToShow(newListOfWarframes)
      setWarframeName("")
  }
  const handleClickSearchWarframe = (e) => {
    e.preventDefault()
    if (warframeName) {
      searchWarframe(warframeName)
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
  useEffect(() => {
    warframeName == "" ? setListOfCoincidences([]) : null 
    if (warframeName) {
      const list = warframes.filter( warframe => warframe.name.toLowerCase().includes(warframeName))
      setListOfCoincidences(list) 
    }
  }, [warframeName])
  
  return (
    <>
      <ImgHeader img={"/warframes/warframes.jpg"} text={"WELCOME TENNO"}/>
      <section className="max-w-[1200px] w-full mx-auto p-3 flex flex-col gap-10">
        <h2 className="text-4xl tracking-[5px] font-medium uppercase py-10">Warframes</h2>
        <form className="flex gap-5 flex-wrap">
          <div className="flex-grow shadow-md relative">
            <input placeholder="Search your warframe..." onChange={ handleClickWriteWarframe } value={ warframeName } className="w-full h-[60px] px-5" type="text" />
            <section className="max-h-[300px] overflow-y-auto w-full bg-gray-600 absolute top-[100%]">
              {
                listOfCoincidences?.map( (warframe) =>
                <button key={warframe.uniqueName} onClick={ (e) => {
                  e.preventDefault()
                  searchWarframe( warframe.name )
                }}
                className="w-full px-5 hover:bg-gray-200 border-b border-gray-200">
                  {warframe.name}
                </button>)
              }
            </section>
          </div>
          <button onClick={ handleClickSearchWarframe } className="h-[60px] border-[2px] p-3">search</button>
          <button onClick={ handleViewAll } className="bg-black text-white p-3 shadow-md shadow-black hover:bg-white hover:text-black">VIEW ALL</button>
        </form>
        <section className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-5">
          {warframesToShow?.map((warframe) => (
            <WarframeCard key={warframe.uniqueName} warframe={warframe} />
          ))}
        </section>
      </section>
    </>
  );
};
export default Warframe;

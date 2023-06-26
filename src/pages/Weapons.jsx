import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import FormSearch from "../components/FormSearch";
import ImgHeader from "../components/ImgHeader";
import WeaponCard from "../components/weapons/WeaponCard";
import { WeaponCategoryLink } from "../components/weapons/WeaponCategoryLink";
import { axiosWarframe } from "../utils/configAxios";
import { pagination } from "../utils/pagination,js";

const Weapons = () => {
  const [weapons, setWeapons] = useState();
  const [weaponsToShow, setWeaponsToShow] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBlock, setCurrentBlock] = useState(1);
  const [categoryOfWeapons, setCategoryOfWeapons] = useState([]);
  const navigate = useNavigate();

  const redirectToWeaponDetailById = (weapon) => {
    navigate(`/weapons/detail/${weapon.name}`);
  };
  const { start, end, lastPage, pages } = pagination(
    20,
    currentPage,
    weaponsToShow
  );
  const {
    start: blockStart,
    end: blockEnd,
    lastPage: lastBlock,
  } = pagination(5, currentBlock, pages);

  const handlePlussBlock = () => {
    const newBlock = currentBlock + 1;
    if (newBlock <= lastBlock) {
      setCurrentBlock(newBlock);
    }
  };
  const handleLessBlock = () => {
    const newBlock = currentBlock - 1;
    if (newBlock > 0) {
      setCurrentBlock(newBlock);
    }
  };
  useEffect(() => {
    // Creamos una variable para almacenar la fuente de cancelación
    const source = axios.CancelToken.source();
    axiosWarframe
      .get("weapons/", { cancelToken: source.token })
      .then((res) => {
        setWeapons(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          // La petición fue cancelada
          console.log("Petición cancelada:", err.message);
        } else {
          console.log("Error:", err);
        }
      });
    // Función para cancelar la petición si el componente se desmonta antes de completarse
    return () => {
      source.cancel("Componente desmontado");
    };
  }, []);

  useEffect(() => {
    if (weapons) {
      setWeaponsToShow(weapons);
    }
  }, [weapons]);

  useEffect(() => {
    const categorys = [];
    if (weapons) {
      weapons.forEach((weapon) => {
        if (!categorys.includes(weapon.category)) {
          categorys.push(weapon.category);
        }
      });
    }
    setCategoryOfWeapons(categorys);
  }, [weapons]);

  return (
    <>
      <ImgHeader img={"/sectionweapon/wakeup.jpg"} />
      <section className="max-w-[1200px] mx-auto p-3 pb-[120px]">
        <h2 className="text-4xl tracking-[5px] font-medium uppercase py-10">
          WEAPONS
        </h2>
        <section className="grid gap-5">
          <h4 className="text-xl text-gray-500 font-medium py-5">
            Weapons by Category
          </h4>
          <div className="grid sm:grid-cols-2 gap-4 auto-rows-fr">
            {categoryOfWeapons?.map((category) => (
              <WeaponCategoryLink key={category} category={category} />
            ))}
          </div>
        </section>
        <section>
          <h4 className="text-xl text-gray-500 font-medium pt-10">
            All Weapons
          </h4>
          <FormSearch
            allItems={weapons}
            categories={categoryOfWeapons}
            nameOfCategory={"category"}
            setItemsToShow={setWeaponsToShow}
            setCurrentPage={setCurrentPage}
            setCurrentBlock={setCurrentBlock}
          />
          <section className="grid grid-cols-[repeat(3,_auto)] py-10">
            <button className="mx-auto text-3xl" onClick={handleLessBlock}>
              <FaRegArrowAltCircleLeft />
            </button>
            <div className="flex gap-2 justify-center items-center">
              {pages.slice(blockStart, blockEnd).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`${
                    currentPage == page ? "bg-red-600" : "bg-gray-200"
                  } rounded-md w-[25px] sm:w-[35px] h-[45px] shadow-md shadow-black/60 font-medium`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="mx-auto text-3xl" onClick={handlePlussBlock}>
              <FaRegArrowAltCircleRight />
            </button>
          </section>
          <section className="grid grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] gap-4 auto-rows-fr">
            {weaponsToShow?.slice(start, end).map((weapon) => (
              <WeaponCard
                key={
                  weapon.uniqueName + weapon.wikiaThumbnail + weapon.wikiaUrl
                }
                weapon={weapon}
                setCurrentWeapon={redirectToWeaponDetailById}
              />
            ))}
          </section>
        </section>
      </section>
    </>
  );
};
export default Weapons;

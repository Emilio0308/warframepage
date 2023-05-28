import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWarframe } from "../../utils/configAxios";
import WeaponCard from "./WeaponCard";
import WeaponDetail from "./WeaponDetail";
import WeaponStatistics from "./weaponDetail/WeaponStatistics";
import WeaponComponents from "./weaponDetail/WeaponComponents";
import ImgHeader from "../ImgHeader";

const WeaponByCategory = () => {
  const { categoryName } = useParams();
  const [weaponsByCategory, setWeaponsByCategory] = useState();
  const [currentWeapon, setCurrentWeapon] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const paginationWeapons = () => {
    const WEAPONS_X_PAGE = 10;
    const start = (currentPage - 1) * WEAPONS_X_PAGE;
    const end = currentPage * WEAPONS_X_PAGE;
    const maxNumOfWeapons = weaponsByCategory?.length;
    const lastPage = Math.ceil(maxNumOfWeapons / WEAPONS_X_PAGE);

    return { start, end, lastPage };
  };
  const { start, end, lastPage } = paginationWeapons();

  const handlePlussPage = () => {
    const newPage = currentPage + 1;
    if (lastPage < newPage) {
      return;
    } else {
      setCurrentPage(newPage);
    }
  };

  const handleLessPage = () => {
    const newPage = currentPage - 1;
    if (newPage > 0) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    paginationWeapons();
  }, [currentPage]);

  useEffect(() => {
    axiosWarframe
      .get("weapons/")
      .then((res) => {
        const weaponsFilter = res.data.filter(
          (weapons) => weapons.category == categoryName
        );
        setWeaponsByCategory(weaponsFilter);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
    <ImgHeader img={"/sectionweapon/nova.jpg"} text={"GET READY FOR WAR!"} />
    <section className="max-w-[1200px] mx-auto py-10 p-3">
      <h3 className="uppercase text-3xl tracking-widest text-gray-500 py-5">
        {categoryName}
      </h3>
      <section className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-5">
        <section>
          {currentWeapon ? (
            <WeaponDetail currentWeapon={currentWeapon} />
          ) : (
            <div>
              <span>Select one weapon to see the details</span>
              <div className="w-full relative flex justify-center items-center">
                <img
                  download="lazy"
                  className="h-full w-full"
                  src="/sectionweapon/chosseweapon.webp"
                  alt={currentWeapon?.name}
                />
                <span className="uppercase absolute text-white text-4xl tracking-wider">
                  chosse a weapon
                </span>
              </div>
            </div>
          )}
        </section>
        <section className="flex flex-col gap-5">
          <div className="grid grid-cols-[40px,_1fr,_40px]">
            <button onClick={handleLessPage}>{"<"}</button>
            <h4 className="text-center">Select a weapon</h4>
            <button onClick={handlePlussPage}>{">"}</button>
          </div>
          <section className="grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-4 ">
            {weaponsByCategory?.slice(start, end).map((weapon) => (
              <WeaponCard
                key={weapon.name}
                weapon={weapon}
                setCurrentWeapon={setCurrentWeapon}
              />
            ))}
          </section>
        </section>
      </section>
      <WeaponStatistics currentWeapon={currentWeapon} />
      <article className="flex flex-col gap-4">
        <span className="text-2xl">Components</span>
        <section className="grid sm:grid-cols-2 gap-4">
          {currentWeapon?.components?.map((component) => (
            <WeaponComponents
              key={component.uniqueName}
              component={component}
            />
          ))}
        </section>
      </article>
    </section>
    </>
  );
};
export default WeaponByCategory;

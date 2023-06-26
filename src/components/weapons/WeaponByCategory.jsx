import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWarframe } from "../../utils/configAxios";
import WeaponCard from "./WeaponCard";
import WeaponDetail from "./WeaponDetail";
import WeaponStatistics from "./weaponDetail/WeaponStatistics";
import WeaponComponents from "./weaponDetail/WeaponComponents";
import WeaponsButtonsPage from "./weaponDetail/WeaponsButtonsPage";
import { pagination } from "../../utils/pagination,js";
import SectionTitle from "../fragmentsUtils/SectionTitle";
import { v4 as uuidv4 } from "uuid";

const WeaponByCategory = () => {
  const { categoryName } = useParams();
  const [weaponsByCategory, setWeaponsByCategory] = useState();
  const [currentWeapon, setCurrentWeapon] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const { start, end, lastPage } = pagination(
    10,
    currentPage,
    weaponsByCategory
  );

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
    <section className="max-w-[1200px] mx-auto py-10 p-3 pb-[120px] md:mt-[60px]">
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
          <WeaponsButtonsPage
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            lastPage={lastPage}
          />
          <section className="grid grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] gap-4 ">
            {weaponsByCategory?.slice(start, end).map((weapon) => (
              <WeaponCard
                key={weapon.name + uuidv4()}
                weapon={weapon}
                setCurrentWeapon={setCurrentWeapon}
              />
            ))}
          </section>
        </section>
      </section>
      <WeaponStatistics currentWeapon={currentWeapon} />
      <article className="flex flex-col gap-4">
        <SectionTitle title={"Components"} />
        <section className="grid sm:grid-cols-2 gap-4">
          {currentWeapon?.components?.map((component) => (
            <WeaponComponents key={uuidv4()} component={component} />
          ))}
        </section>
      </article>
    </section>
  );
};
export default WeaponByCategory;

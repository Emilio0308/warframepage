import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosWarframe } from "../../utils/configAxios";
import ImgHeader from "../ImgHeader";
import WeaponCard from "./WeaponCard";
import WeaponDetail from "./WeaponDetail";
import WeaponStatistics from "./weaponDetail/WeaponStatistics";
import WeaponComponents from "./weaponDetail/WeaponComponents";
import { pagination } from "../../utils/pagination,js";
import WeaponsButtonsPage from "./weaponDetail/WeaponsButtonsPage";
import SectionTitle from "../fragmentsUtils/SectionTitle";

const WeaponDetailById = () => {
  const { weaponName } = useParams();
  const [weaponByName, setWeaponByName] = useState();
  const [allWeapons, setAllWeapons] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const redirectToWeaponDetailById = (weapon) => {
    navigate(`/weapons/detail/${weapon.name}`);
  };
  const { start, end, lastPage } = pagination(10, currentPage, allWeapons);
  useEffect(() => {
    axiosWarframe
      .get(`weapons/${weaponName}/`)
      .then((res) => setWeaponByName(res.data))
      .catch((err) => console.log(err));
  }, [weaponName]);

  useEffect(() => {
    axiosWarframe
      .get("weapons/")
      .then((res) => {
        setAllWeapons(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ImgHeader img={"/sectionweapon/nova.jpg"} text={"GET READY FOR WAR!"} />
      <section className="w-full max-w-[1200px] p-3 mx-auto">
        <h4>{weaponName}</h4>
        <section className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-5">
          <WeaponDetail currentWeapon={weaponByName} />
          <section className="flex flex-col gap-5">
            <WeaponsButtonsPage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              lastPage={lastPage}
            />
            <section className="grid grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] gap-4 ">
              {allWeapons?.slice(start, end).map((weapon) => (
                <WeaponCard
                  key={weapon.name + weapon.uniqueName}
                  weapon={weapon}
                  setCurrentWeapon={redirectToWeaponDetailById}
                />
              ))}
            </section>
          </section>
        </section>
        <WeaponStatistics currentWeapon={weaponByName} />
        <article className="flex flex-col gap-4">
          <SectionTitle title={"Components"} />
          <article className="grid sm:grid-cols-2 gap-4">
            {weaponByName?.components?.map((component) => (
              <WeaponComponents
                key={component.uniqueName + component.description}
                component={component}
              />
            ))}
          </article>
        </article>
      </section>
    </>
  );
};
export default WeaponDetailById;

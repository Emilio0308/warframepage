import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { axiosWarframe } from "../../utils/configAxios";
import { pagination } from "../../utils/pagination,js";
import SectionTitle from "../fragmentsUtils/SectionTitle";
import WeaponCard from "./WeaponCard";
import WeaponDetail from "./WeaponDetail";
import WeaponComponents from "./weaponDetail/WeaponComponents";
import WeaponStatistics from "./weaponDetail/WeaponStatistics";
import WeaponsButtonsPage from "./weaponDetail/WeaponsButtonsPage";

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
    <section className="w-full max-w-[1200px] p-3 mx-auto pb-[120px] md:mt-[60px]">
      <h4 className="uppercase tracking-widest text-gray-500 py-5">
        {weaponName}
      </h4>
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
                key={weapon.name + uuidv4()}
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
              key={component.uniqueName + uuidv4()}
              component={component}
            />
          ))}
        </article>
      </article>
    </section>
  );
};
export default WeaponDetailById;

import { useEffect, useState } from "react";
import { axiosWarframe } from "../utils/configAxios";
import WeaponCard from "../components/weapons/WeaponCard";
import { WeaponCategoryLink } from "../components/weapons/WeaponCategoryLink";

const Weapons = () => {
  const [weapons, setWeapons] = useState();
  const [categoryOfWeapons, setCategoryOfWeapons] = useState([]);

  useEffect(() => {
    axiosWarframe
      .get("weapons/")
      .then((res) => {
        setWeapons(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
    <section className="max-w-[1024px] mx-auto my-[100px] p-3">
      <h3 className="py-10">WEAPONS</h3>
      <section className="grid gap-5">
        <h4>Weapons by Category</h4>
        <div className="grid grid-cols-2 gap-4 auto-rows-fr">
          {categoryOfWeapons?.map((category) => (
            <WeaponCategoryLink key={category} category={category} />
          ))}
        </div>
      </section>
      <section>
        <h4>All Weapons</h4>
        <form action="" className="flex gap-4 flex-wrap">
          <div className="flex-grow">
            <input className="w-full p-5" type="text" placeholder="boltor, ignis..." />
          </div>
          <button className="">Search</button>
        </form>
        <section className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 auto-rows-fr">
          {
            weapons?.map( (weapon) => <WeaponCard key={weapon.uniqueName + weapon.wikiaThumbnail + weapon.wikiaUrl} weapon={weapon} setCurrentWeapon={null}/>)
          }
        </section>
      </section>
    </section>
  );
};
export default Weapons;

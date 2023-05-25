import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { axiosWarframe } from "../../utils/configAxios"
import WeaponCard from "./WeaponCard"
import WeaponDetail from "./WeaponDetail"

const WeaponByCategory = () => {
  const { categoryName } =  useParams()
  const [weaponsByCategory, setWeaponsByCategory] = useState()
  const [currentWeapon, setCurrentWeapon] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const paginationWeapons = () => {
    const WEAPONS_X_PAGE = 12
    const start = (currentPage - 1 ) * WEAPONS_X_PAGE
    const end = currentPage * WEAPONS_X_PAGE
    const maxNumOfWeapons = weaponsByCategory?.length
    const lastPage = Math.ceil(maxNumOfWeapons / WEAPONS_X_PAGE)

    return { start, end , lastPage }
  }
  const { start, end , lastPage } = paginationWeapons()

  const handlePlussPage = () => {
    const newPage = currentPage + 1
    if (lastPage < newPage) {
      return
    } else {
      setCurrentPage(newPage)
    }
  }

  const handleLessPage = () => {
    const newPage = currentPage - 1
    if ( newPage > 0) {
      setCurrentPage(newPage)
    }
  }

  useEffect(() => {
    paginationWeapons()
  }, [currentPage])
  

  useEffect(() => {
    axiosWarframe.get("weapons/")
    .then( (res) => {
      const weaponsFilter = res.data.filter( (weapons) => weapons.category == categoryName )
      setWeaponsByCategory(weaponsFilter)
    })
    .catch( (err) => console.log(err))
  }, [])
  return (
    <section className="max-w-[1024px] mx-auto py-10 p-3">
      <h3>{categoryName}</h3>
      <section className="grid sm:grid-cols-2 gap-5">
        <section>
          {
            currentWeapon? <WeaponDetail currentWeapon={currentWeapon} /> : 
            <div>
              <span>Select one weapon to see the details</span>
              <div className="w-full relative flex justify-center items-center">
                <img className="h-full w-full" src="/sectionweapon/chosseweapon.webp" alt="" />
                <span className="uppercase absolute text-white text-4xl tracking-wider">chosse a weapon</span>
              </div>
            </div>
          } 
        </section>
        <sectio- className="flex flex-col gap-5">
          <h4>Select a weapon</h4>
          <section className="grid grid-cols-[repeat(auto-fill,_minmax(80px,_1fr))] gap-4 ">
            {
              weaponsByCategory?.slice(start,end).map ( (weapon) =>
              <WeaponCard key={weapon.name} weapon={weapon} setCurrentWeapon={setCurrentWeapon} />)
            }
          </section>
          <button onClick={ handlePlussPage}>+</button>
          <button onClick={ handleLessPage}>-</button>
        </sectio->
      </section>
    </section>
  )
}
export default WeaponByCategory
import { useState } from "react";
// import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import LinkNavBar from "./LinkNavBar";


const NavBar = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const listLink = [
    "warframes",
    "weapons",
    "resources",
    "sentinels",
    "quests",
    "mods",
    "pets",
    "cycles",
  ];
  return (
    <header className="fixed bottom-0 lg:top-0 lg:bottom-auto w-full z-50 bg-white shadow-md border-t-2">
      <nav className="grid grid-cols-[180px,_1fr] mx-auto gap-16 h-full content-center relative">
        <NavLink
          onClick={() => setIsShowNav(false)}
          className="grid justify-items-center items-center pl-3"
          to={"/"}
        >
          <img src="/footer/logo.png" alt="warframe Logo" />
        </NavLink>
        <div className="w-full hidden lg:block">
          <ul className="grid grid-cols-8 font-semibold h-[60px] bg-gray-200 gap-[1px]">
            {listLink.map((path) => (
              <LinkNavBar key={path} path={path} setIsShowNav={setIsShowNav} />
            ))}
          </ul>
        </div>
        <div className="flex justify-end lg:hidden">
          <ul
            className={`grid font-semibold w-full h-[calc(100vh-60px)] pl-8 bg-white absolute bottom-full max-w-[380px]
          ${
            isShowNav ? "right-0" : "right-[-100%]"
          } border-b-2 pt-28 transition-[right] duration-300`}
          >
            {listLink.map((path) => (
              <LinkNavBar setIsShowNav={setIsShowNav} key={path} path={path} />
            ))}
            <a
              href="https://www.warframe.com/es"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-10 translate-x-1/2 right-1/2 text-white tracking-[3px] text-center text-xl p-3 bg-red-600 w-[280px]"
            >
              PLAY NOW
            </a>
          </ul>
          <button
            onClick={() => setIsShowNav((prev) => !prev)}
            className="h-[60px] pr-3 lg:hidden text-xl"
          >
            {/* <FaBars/> */}
          </button>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;

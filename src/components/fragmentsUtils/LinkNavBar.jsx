import { NavLink } from "react-router-dom";

const LinkNavBar = ({ path, setIsShowNav }) => {
  return (
    <li>
      <NavLink
        onClick={() => setIsShowNav((prev) => !prev)}
        className="aria-[current=page]:text-red-600 text-lg grid h-full w-full p-3 border-b-4 border-transparent hover:border-red-600 hover:tracking-wide transition-colors bg-white capitalize"
        to={`/${path}`}
      >
        {path}
      </NavLink>
    </li>
  );
};
export default LinkNavBar;

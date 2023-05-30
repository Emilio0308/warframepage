import { Link } from "react-router-dom";

const LinkHome = ( { title , route , img , alt}) => {
  return (
    <Link className="grid grid-rows-[1fr,_auto] shadow-md shadow-black" to={route}>
      
      <div>
        <img
          className="w-full h-full object-cover"
          download="lazy"
          src={img}
          alt={alt}
        />
      </div>
      <h2 className="bg-black text-white font-bold tracking-[5px] uppercase p-3 hover:bg-gray-200 hover:text-red-600">{title}</h2>
    </Link>
  );
};
export default LinkHome;

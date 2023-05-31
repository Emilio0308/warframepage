import { Link } from "react-router-dom";
import News from "./News";
import InvasionComponent from "./InvasionComponent";
import LinkHome from "./LinkHome";



const Home = () => {
  return (
    <main>
      <section className="w-full">
        <div className="w-full relative pb-20 bg-black">
          <video autoPlay muted loop poster="https://n9e5v4d8.ssl.hwcdn.net/images/duviri-hubsite/duviri-paradox-launch-cutdown.jpg" className="w-full">
            <source
              className="w-full aspect-[16/9]"
              src="/video/homeVideo.webm"
              type="video/webm"
            />
          </video>
          <div className="absolute w-full max-w-[700px] left-[50%] translate-x-[-50%] bottom-10 z-20">
            <img download="lazy" className="object-scale-down" src="/home/warframe.png" alt="warframe home" />
          </div>
          <div className="absolute w-full h-[calc(100%-80px)] top-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        <section className="p-3">
          <News />
        </section>
        <section className="p-3 w-full">
        <InvasionComponent/>
        </section>
        <section className="p-3">
          <article className="grid grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] auto-rows-fr gap-5 max-w-[1200px] mx-auto">
            <LinkHome title={"WARFRAMES"} img={"/home/links/warframes.jpg"} route={"/warframes"} alt={"warframe sections"} />
            <LinkHome title={"WEAPONS"} img={"/home/links/weapons.jpeg"} route={"/weapons"} alt={"weapons sections"} />
            <LinkHome title={"CYCLES"} img={"/home/links/cycles.jpg"} route={"/cycles"} alt={"cycles sections"} />
            <LinkHome title={"MODS"} img={"/home/links/mods.webp"} route={"/mods"} alt={"mods sections"} />
            <Link to="/resources">resources </Link>
            <Link to="/warframes">WARFRAMES </Link>
            <Link to="/warframes">WARFRAMES </Link>
            <Link to="/warframes">WARFRAMES </Link>
          </article>
        </section>
      </section>
    </main>
  );
};
export default Home;

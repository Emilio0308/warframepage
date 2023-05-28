import { Link } from "react-router-dom";
import News from "./News";

const Home = () => {
  return (
    <main>
      <section className="w-full">
        <div className="w-full relative">
          <video autoPlay muted loop poster="https://n9e5v4d8.ssl.hwcdn.net/images/duviri-hubsite/duviri-paradox-launch-cutdown.jpg" className="w-full">
            <source
              className="w-full aspect-[16/9]"
              src="/video/homeVideo.webm"
              type="video/webm"
            />
          </video>
          <div className="absolute aspect-[16/9] w-[50%] left-[50%] translate-x-[-50%] bottom-0">
            <img download="lazy" src="/home/warframe.png" alt="warframe home" />
          </div>
        </div>
        <section className="p-3">
          <News />
        </section>
        <section className="p-3">
          <article className="grid grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] auto-rows-fr gap-5 max-w-[1200px] mx-auto">
            <Link className="grid grid-rows-[30px,_1fr]" to="/warframes">
              <h2>WARFRAMES</h2>
              <div>
                <img
                  className="w-full h-full object-cover"
                  download="lazy"
                  src="/home/links/warframes.jpg"
                  alt="warframe sections"
                />
              </div>
            </Link>
            <Link className="grid grid-rows-[30px,_1fr]" to="/weapons">
              <h2>WEAPONS</h2>
              <div>
                <img
                  className="w-full h-full object-cover"
                  download="lazy"
                  src="/home/links/weapons.jpeg"
                  alt="weapons sections"
                />
              </div>
            </Link>
            <Link className="grid grid-rows-[30px,_1fr]" to="/cycles">
              <h2>CYCLES</h2>
              <div>
                <img
                  className="w-full h-full object-cover"
                  download="lazy"
                  src="/home/links/cycles.jpg"
                  alt="cycles sections"
                />
              </div>
            </Link>
            <Link className="grid grid-rows-[30px,_1fr]" to="/mods">
              <h2>MODS</h2>
              <div>
                <img
                  className="w-full h-full object-cover"
                  download="lazy"
                  src="/home/links/mods.webp"
                  alt="cycles sections"
                />
              </div>
            </Link>
            <Link to="/warframes">WARFRAMES </Link>
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

import { Link } from "react-router-dom"
import News from "./News"

const Home = () => {

    
    
  return (
    <main>
        <section className="w-full">
            <div className="w-full relative">
                <video autoPlay muted loop className="w-full">
                    <source className="w-full aspect-[16/9]" src="/video/homeVideo.webm" type="video/webm" />
                </video>
                <div className="absolute aspect-[16/9] w-[50%] left-[50%] translate-x-[-50%] bottom-0">
                  <img download="lazy" src="/home/warframe.png" alt="warframe home" />
                </div>
            </div>
            <section className="p-3">
              <News/>
            </section>
            <section className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] auto-rows-fr gap-5 max-w-[1200px] mx-auto">
              <Link to="/warframes">
                <h2>WARFRAMES</h2>
                <div>
                  <img download="lazy" src="/home/links/warframes.jpg" alt="warframe sections" />
                </div>
              </Link>
              <Link to="/weapons">
                <h2>WEAPONS</h2> 
                <div>
                  <img download="lazy" src="/home/links/weapons.jpeg" alt="weapons sections" />
                </div>
              </Link>
              <Link to="/warframes">WARFRAMES </Link>
              <Link to="/warframes">WARFRAMES </Link>
              <Link to="/warframes">WARFRAMES </Link>
              <Link to="/warframes">WARFRAMES </Link>
              <Link to="/warframes">WARFRAMES </Link>
              <Link to="/warframes">WARFRAMES </Link>
              
            </section>
        </section>
    </main>
  )
}
export default Home
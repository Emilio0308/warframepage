const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gray-300 p-3">
        <section className="w-full max-w-[1200px] grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] auto-rows-fr gap-8 mx-auto pt-20">
          <div className="grid grid-rows-[60px,_1fr]">
            <span className="uppercase text-xl tracking-[5px] font-semibold text-gray-800">
              fandon page
            </span>
            <div className="w-[70%] min-w-[200px]">
              <img src="/footer/logo.png" alt="" />
            </div>
          </div>
          <div className="grid grid-rows-[60px,_1fr]">
            <span className="uppercase font-medium text-xl text-gray-800">
              Links
            </span>
            <ul>
              <li className="w-[100px] py-2">
                <a className="w-full" href="/warframes">Warframe</a>
              </li>
              <li className="w-[100px] py-2">
                <a className="w-full" href="/weapons">Weapons</a>
              </li>
              <li className="w-[100px] py-2">
                <a className="w-full" href="/sentinels">Sentinels</a>
              </li>
              <li className="w-[100px] py-2">
                <a className="w-full" href="/resources">Resources</a>
              </li>
              <li className="w-[100px] py-2">
                <a className="w-full" href="/mods">Mods</a>
              </li>
              <li className="w-[100px] py-2">
                <a className="w-full" href="/cycles">Planets cycles</a>
              </li>
              <li className="w-[100px] py-2">
                <a className="w-full" href="/quests">Quests</a>
              </li>
              <li className="w-[100px] py-2">
                <a className="w-full" href="/weapons">Weapons</a>
              </li>
            </ul>
          </div>
          <div className="grid grid-rows-[60px,_1fr,_auto]">
            <span className="uppercase font-medium text-xl text-gray-800">
              This website
            </span>
            <p>
              All information displayed on this website corresponds to the video
              game Warframe owned by{" "}
              <span className="font-semibold tracking-wider">
                Digital Extremes
              </span>
              . This website is not affiliated with or endorsed by{" "}
              <span className="font-semibold tracking-wider">
                Digital Extremes
              </span>
              .
            </p>
            <a
              className="italic capitalize text-blue-700"
              target="_blank"
              href="https://www.warframe.com/es"
            >
              warframe oficial web-site
            </a>
          </div>
        </section>
      </footer>
      <div className="bg-black text-white h-[30px] text-center mb-[60px] lg:mb-0"></div>
    </>
  );
};
export default Footer;

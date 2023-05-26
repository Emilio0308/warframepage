import { useParams } from "react-router-dom";
import { axiosWarframe } from "../../utils/configAxios";
import { useEffect, useState } from "react";
import WarframeComponent from "./WarframeComponent";
import WarframeAbilitie from "./WarframeAbilitie";
import ImgHeader from "../ImgHeader";

const WarframeDetail = () => {
  const { name } = useParams();
  const [warframeName, setWarframeName] = useState();

  const url = warframeName?.wikiaThumbnail;
  const extension = ".png";
  const urlWithoutQueryParams = url?.split(extension)[0] + extension;
  useEffect(() => {
    axiosWarframe
      .get(`warframes/search/${name}/`)
      .then((res) => setWarframeName(res.data[0]))
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <>
      <ImgHeader img={"/warframes/nova.jpg"} text={"GET READY FOR WAR!"} />

      <section className="p-3 w-full max-w-[1200px] mx-auto">
        <article className="grid justify-items-center sm:grid-cols-2">
          <div className="grid gap-4 w-[80%] p-10">
            <div className="flex gap-9 justify-center text-xl">
              <h3 className="font-medium">{warframeName?.name}</h3>
              <span>{"( " + warframeName?.aura + " )"}</span>
            </div>
            <div
              className={`${
                warframeName?.isPrime ? "border-amber-300" : "border-gray-700"
              } border-[3px] bg-gray-900 shadow-md shadow-black`}
            >
              <img
                className="w-full h-full"
                src={urlWithoutQueryParams}
                alt={warframeName?.name}
              />
            </div>
          </div>
          <article className="flex justify-center items-center p-4">
            <p>{warframeName?.description}</p>
          </article>
        </article>
        <article className="py-10">
          <div className="col-span-2 w-full grid grid-cols-[1fr,_auto,_1fr] items-center">
            <div className="w-full h-[1px] bg-red-500"></div>
            <h4 className="text-center text-xl p-4">Polarities</h4>
            <div className="w-full h-[1px] bg-red-500"></div>
          </div>
          <div className="grid grid-cols-2 w-full gap-4 justify-items-center">
            {warframeName?.polarities.map((polarity) => (
              <span
                key={polarity}
                className="bg-gray-700 w-full max-w-xl rounded-md text-center capitalize text-white py-3"
              >
                {polarity}
              </span>
            ))}
          </div>
        </article>

        <section className="grid md:grid-cols-2 gap-16">
          <article className="">
            <h4 className="uppercase pb-5 text-xl font-medium">Abilities</h4>
            <div className="grid gap-4 auto-rows-fr">
              {warframeName?.abilities.map((abilitie) => (
                <WarframeAbilitie
                  key={abilitie.description}
                  abilitie={abilitie}
                />
              ))}
            </div>
          </article>

          <article className="">
            <h4 className="uppercase pb-5 text-xl font-medium">Components</h4>
            <div className="grid grid-cols-1 gap-4 auto-rows-fr">
              {warframeName?.components.map((component) => (
                <WarframeComponent key={component.name} component={component} />
              ))}
            </div>
          </article>
        </section>
      </section>
    </>
  );
};
export default WarframeDetail;

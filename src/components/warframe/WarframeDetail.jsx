import { useParams } from "react-router-dom";
import { axiosWarframe } from "../../utils/configAxios";
import { useEffect, useState } from "react";
import ImgHeader from "../ImgHeader";
import WarframeDetailMain from "./WarframeDetails/WarframeDetailMain";
import WarframePolarities from "./WarframeDetails/WarframePolarities";
import WarframeComponents from "./WarframeDetails/WarframeComponents";
import WarframeDetailAbilities from "./WarframeDetails/WarframeDetailAbilities";

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
      <section className="bg-[url('/warframes/warframesdetailbg.jpg')] bg-fixed bg-center bg-no-repeat">
        <section className="p-3 w-full max-w-[1200px] mx-auto grid gap-5">
          <div className="grid md:grid-cols-2 grid-rows-[1fr,_auto]">
              <WarframeDetailMain
                urlWithoutQueryParams={urlWithoutQueryParams}
                warframeName={warframeName}
              />
              <WarframePolarities warframeName={warframeName} />
          </div>
          <WarframeDetailAbilities warframeName={warframeName} />

          <WarframeComponents warframeName={warframeName} />
        </section>
      </section>
    </>
  );
};
export default WarframeDetail;

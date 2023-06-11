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

  useEffect(() => {
    axiosWarframe
      .get(`warframes/search/${name}/`)
      .then((res) => setWarframeName(res.data[0]))
      .catch((err) => console.log(err));
  }, [name]);

  const url = `https://warframe-web-assets.nyc3.cdn.digitaloceanspaces.com/images/warframes/splash/${name
    .split(" ")
    .join("")
    .toLowerCase()}.jpg`;

  return (
    <>
      <ImgHeader img={url} text={warframeName?.name.toUpperCase()} />
      <section className="bg-[url('/warframes/warframesdetailbg.jpg')] bg-fixed bg-center bg-no-repeat py-20">
        <div className="grid md:grid-cols-2 grid-rows-[1fr,_auto] p-3 w-full max-w-[1200px] mx-auto">
          <WarframeDetailMain warframeName={warframeName} />
          <WarframePolarities warframeName={warframeName} />
        </div>
      </section>
      <section className="bg-[#ececec] w-full">
        <section className="p-3 w-full max-w-[1200px] mx-auto grid gap-20 py-[80px]">
          <WarframeDetailAbilities warframeName={warframeName} />
          <WarframeComponents warframeName={warframeName} />
        </section>
      </section>
    </>
  );
};
export default WarframeDetail;

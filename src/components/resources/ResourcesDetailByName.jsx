import { useParams } from "react-router-dom";
import { axiosWarframe } from "../../utils/configAxios";
import { useEffect, useState } from "react";
import ResourcesDetailSection from "./ResourcesDetailSection";
import HeaderPageDetail from "../fragmentsUtils/HeaderPageDetail";

const ResourcesDetailByName = () => {
  const [resourcesDetailByName, setResourcesDetailByName] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    axiosWarframe
      .get(`items/${name}`)
      .then((res) => {
        setResourcesDetailByName(res.data);
        console.log(res.data);
      })
      .catch(() => console.log());
  }, [name]);

  return (
    <section className="p-3">
      <section className="w-full mx-auto max-w-[1200px] pb-[120px]">
        <HeaderPageDetail item={resourcesDetailByName} />
        <ResourcesDetailSection resourcesDetailByName={resourcesDetailByName} />
      </section>
    </section>
  );
};
export default ResourcesDetailByName;

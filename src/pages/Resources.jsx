import { useEffect, useState } from "react";
import { axiosWarframe } from "../utils/configAxios";
import ReosurcesSection from "../components/resources/ReosurcesSection";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [typeOfResource, setTypeOfResource] = useState("Resources")
  const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     axiosWarframe
//       .get("items")
//       .then((res) => {
//         const allCategories = [];
//         res.data.forEach((item) => {
//           if (!allCategories.includes(item.category)) {
//             allCategories.push(item.category);
//           }
//         });
//         console.log(allCategories);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  useEffect(() => {
    axiosWarframe("items").then((res) => {
      const resourcesData = res.data.filter(
        (element) => element.category == typeOfResource
      );
      setResources(resourcesData);
    });
  }, [typeOfResource]);

  useEffect(() => {
    if (resources) {
      const listCategories = [];
      resources.forEach((resource) => {
        if (!listCategories.includes(resource.type)) {
          listCategories.push(resource.type);
        }
      });
      setCategories(listCategories);
    }
  }, [resources]);
  
  return (
    <section className="w-full max-w-[1200px] mx-auto p-3">
      <h2 className="uppercase text-2xl">resources</h2>
      <div className="flex gap-5">
        <button onClick={(e) => setTypeOfResource(e.target.value)} value="Resources">Resources</button>
        <button onClick={(e) => setTypeOfResource(e.target.value)} value="Gear">Gear</button>
        <button onClick={(e) => setTypeOfResource(e.target.value)} value="Fish">Fish</button>
        <button onClick={(e) => setTypeOfResource(e.target.value)} value="Relics">Relics</button>
        <button onClick={(e) => setTypeOfResource(e.target.value)} value="Sigils">Sigils</button>
        <button onClick={(e) => setTypeOfResource(e.target.value)} value="Skins">Skins</button>
      </div>
      <ReosurcesSection categories={categories} resources={resources} />
    </section>
  );
};
export default Resources;

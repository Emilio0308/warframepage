import { useEffect, useState } from "react";
import Loading from "../components/fragmentsUtils/Loading";
import ReosurcesSection from "../components/resources/ReosurcesSection";
import { axiosWarframe } from "../utils/configAxios";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [resourcesToShow, setResourcesToShow] = useState();
  const [typeOfResource, setTypeOfResource] = useState("Resources");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axiosWarframe
      .get("items")
      .then((res) => {
        const allCategories = [];
        res.data.forEach((item) => {
          if (!allCategories.includes(item.category)) {
            allCategories.push(item.category);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosWarframe(`items/search/${typeOfResource}`, {
      params: {
        by: "category",
      },
    }).then((res) => {
      setResources(res.data);
      setResourcesToShow(res.data);
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
    <section className="w-full max-w-[1200px] mx-auto p-3 pb-[120px] lg:mt-[60px]">
      <h2 className="text-4xl tracking-[5px] font-medium uppercase py-10">
        resources
      </h2>
      <div className="flex gap-5 w-full flex-wrap justify-center font-medium">
        <button
          className={`${
            typeOfResource == "Resources" ? "bg-red-600" : "bg-blue-500"
          } p-3 rounded-md text-white uppercase w-[115px]`}
          onClick={(e) => setTypeOfResource(e.target.value)}
          value="Resources"
        >
          Resources
        </button>
        <button
          className={`${
            typeOfResource == "Gear" ? "bg-red-600" : "bg-blue-500"
          } p-3 rounded-md text-white uppercase w-[115px]`}
          onClick={(e) => setTypeOfResource(e.target.value)}
          value="Gear"
        >
          Gear
        </button>
        <button
          className={`${
            typeOfResource == "Fish" ? "bg-red-600" : "bg-blue-500"
          } p-3 rounded-md text-white uppercase w-[115px]`}
          onClick={(e) => setTypeOfResource(e.target.value)}
          value="Fish"
        >
          Fish
        </button>
        <button
          className={`${
            typeOfResource == "Relics" ? "bg-red-600" : "bg-blue-500"
          } p-3 rounded-md text-white uppercase w-[115px]`}
          onClick={(e) => setTypeOfResource(e.target.value)}
          value="Relics"
        >
          Relics
        </button>
        <button
          className={`${
            typeOfResource == "Sigils" ? "bg-red-600" : "bg-blue-500"
          } p-3 rounded-md text-white uppercase w-[115px]`}
          onClick={(e) => setTypeOfResource(e.target.value)}
          value="Sigils"
        >
          Sigils
        </button>
        <button
          className={`${
            typeOfResource == "Skins" ? "bg-red-600" : "bg-blue-500"
          } p-3 rounded-md text-white uppercase w-[115px]`}
          onClick={(e) => setTypeOfResource(e.target.value)}
          value="Skins"
        >
          Skins
        </button>
      </div>
      {resourcesToShow ? (
        <ReosurcesSection
          categories={categories}
          resources={resources}
          resourcesToShow={resourcesToShow}
          setResourcesToShow={setResourcesToShow}
        />
      ) : (
        <Loading />
      )}
    </section>
  );
};
export default Resources;

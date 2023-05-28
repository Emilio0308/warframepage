import { useEffect, useState } from "react";
import { axiosWarframe } from "../utils/configAxios";
import ItemCard from "../components/items/ItemCard";
import Form from "../components/Form";

const Items = () => {
  const [allItems, setAllItems] = useState();
  const [categories, setCategories] = useState([]);
  const [itemsToShow, setItemsToShow] = useState()
  useEffect(() => {
      if (allItems) {
        const listCategories = [];
        allItems.forEach((item) => {
          if (!listCategories.includes(item.category)) {
            listCategories.push(item.category);
          }
        });
        setCategories(listCategories);
      }
  }, [allItems]);

  useEffect(() => {
    axiosWarframe
      .get("items")
      .then((res) => {
        setAllItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (allItems) {
        setItemsToShow(allItems)
    }
  }, [allItems]);

  return (
    <section>
      <section className="w-full max-w-[1200px] mx-auto">
        <h2>ALL ITEMS</h2>
        <Form categories={categories} setItemsToShow={setItemsToShow} allItems={allItems}/>
        <section className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))]">
          {itemsToShow?.slice(0, 20).map((item) => (
            <ItemCard key={item.name} item={item} />
          ))}
        </section>
      </section>
    </section>
  );
};
export default Items;

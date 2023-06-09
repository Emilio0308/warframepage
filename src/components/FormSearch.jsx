import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const FormSearch = ({
  categories,
  setItemsToShow,
  allItems,
  nameOfCategory,
  setCurrentPage,
  setCurrentBlock,}) => {

  const [itemName, setitemName] = useState("");
  const hanldeFilterByCategory = (category) => {
    if (category == "All") {
      setItemsToShow(allItems);
    } else {
      const newListToShow = allItems.filter(
        (item) => item[nameOfCategory].includes(category)
      );
      setItemsToShow(newListToShow);
    }
    setCurrentPage(1);
    setCurrentBlock(1);
  };
  const hanldeChangeInput = (e) => {
    setitemName(e.target.value);
  };
  const hanldeSearchByName = (e) => {
    e.preventDefault();
    if (itemName) {
      const newListOfItems = allItems.filter((item) =>
        item.name.toLowerCase().includes(itemName.toLowerCase())
      );
      setItemsToShow(newListOfItems);
      setitemName("")
    }
  };
  return (
    <form className="flex gap-5 justify-center items-center flex-wrap my-10">
      <div className="flex-grow h-[60px] shadow-md">
        <input
          onChange={hanldeChangeInput}
          value={itemName}
          className="w-full h-full p-3 outline-none"
          placeholder="Search items by name"
          type="text"
        />
      </div>
      <button onClick={hanldeSearchByName} className="h-[60px] text-3xl p-3">
        <FaSearch />
      </button>
      <select
        className="h-[60px] w-[150px]"
        onChange={(e) => hanldeFilterByCategory(e.target.value)}
      >
        <option value="All">All</option>
        {categories?.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </form>
  );
};
export default FormSearch;

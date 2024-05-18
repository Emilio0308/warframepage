import { useEffect, useState } from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { axiosWarframe } from "../../utils/configAxios";
import NewsCard from "./NewsCard";

const News = () => {
    const [news, setNews] = useState()
    const [currentPageNews, setCurrentPageNews] = useState(1)
    
    useEffect(() => {
      axiosWarframe.get("pc/en/news")
      .then((res)=> {
        setNews(res.data.reverse())
      })
      .catch((err)=> console.log(err))
    }, [])

    const paginationNews = () => {
      const news_X_page = 4
      const star = (currentPageNews - 1) * news_X_page
      const end = currentPageNews * news_X_page
      const lastPage = Math.ceil(news?.length / news_X_page )

      return { star , end , lastPage }
    }
    const { star , end , lastPage } = paginationNews ()

    const hanldePlus = () => {
      const newPage = currentPageNews + 1
      newPage > lastPage ? setCurrentPageNews(1) :  setCurrentPageNews( newPage )
    }

    const hanldeLess = () => {
      const newPage = currentPageNews - 1
      newPage <= 0 ? setCurrentPageNews(lastPage) :  setCurrentPageNews( newPage )
    }
  return (
    <section className="flex flex-col min-h-[360px] justify-around items-center">
      <div className="relative flex justify-center items-center w-full max-w-[1200px] mx-auto">
        <h2 className="tracking-[8px] text-5xl text-red-600 font-bold p-5">NEWS</h2>
        <button
          className="absolute top-[50%] translate-y-[-50%] left-3 text-4xl text-red-600"
          onClick={hanldeLess}
        >
          <FaRegArrowAltCircleLeft />
        </button>
        <button
          className="absolute top-[50%] translate-y-[-50%] right-3 text-4xl text-red-600"
          onClick={hanldePlus}
        >
          <FaRegArrowAltCircleRight />
        </button>
      </div>
      <section className=" grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] w-full max-w-[1200px] mx-auto gap-5">
        {news
          ?.slice(star, end)
          .map((newitem) => (
            <NewsCard key={newitem.id} newInfo={newitem} />
          ))}
      </section>
    </section>
  );
};
export default News;

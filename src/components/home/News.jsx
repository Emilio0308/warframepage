import { useEffect, useState } from "react";
import { axiosWarframe } from "../../utils/configAxios";
import NewsCard from "./NewsCard";

const News = () => {
    const [news, setNews] = useState()
    const [currentPageNews, setCurrentPageNews] = useState(1)
    
    useEffect(() => {
      axiosWarframe.get("pc/news")
      .then((res)=> setNews(res.data))
      .catch((err)=> console.log(err))
    }, [])

    const paginationNews = () => {
      const news_X_page = 3
      const star = (currentPageNews - 1) * news_X_page
      const end = currentPageNews * news_X_page

      return { star , end }
    }
    const { star , end } = paginationNews ()

    const hanldePlus = () => {
      const newPage = currentPageNews + 1
      newPage > Math.ceil(news?.length / 3 )? setCurrentPageNews(1) :  setCurrentPageNews( newPage )
    }

    const hanldeLess = () => {
      const newPage = currentPageNews - 1
      console.log(newPage)
      newPage <= 0 ? setCurrentPageNews(6) :  setCurrentPageNews( newPage )
    }
  return (
    <section className="flex flex-col gap-3">
      <div className="relative flex justify-center items-center">
        <h2 className="tracking-widest">NEWS</h2>
        <button
          className="absolute top-[50%] translate-y-[-50%] left-3"
          onClick={hanldeLess}
        >
          {"<"}
        </button>
        <button
          className="absolute top-[50%] translate-y-[-50%] right-3"
          onClick={hanldePlus}
        >
          {">"}
        </button>
      </div>
      <section className=" grid grid-cols-3 gap-5 grid-rows-[auto]">
        {news
          ?.reverse()
          .slice(star, end)
          .map((newitem) => (
            <NewsCard key={newitem.id} newInfo={newitem} />
          ))}
      </section>
    </section>
  );
};
export default News;

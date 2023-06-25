import { imgUrl } from "../../utils/imgUrl";
import TitlePageDetail from "./TitlePageDetail";

const HeaderPageDetail = ({ item , extra}) => {
  const { url } = imgUrl(item);
  return (
    <section className="grid max-w-[600px]">
      <TitlePageDetail title={item.category} subTitle={item.type} />
      <article className="grid gap-4">
        <h5 className="font-medium text-gray-600">{item.name}</h5>
        <div
          className={`${item.type == "Sigil" ? "bg-black" : "bg-transparent"}`}
        >
          <img src={url} alt={item.name} loading="lazy" />
        </div>
        {extra}
        <p className="uppercase">{item.description}</p>
      </article>
    </section>
  );
};
export default HeaderPageDetail;

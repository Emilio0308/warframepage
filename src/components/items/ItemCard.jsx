import { imgUrl } from "../../utils/imgUrl"

const ItemCard = ( { item } ) => {
    const {url} = imgUrl(item)
  return (
    <div>
        <span>{item.name}</span>
        <div>
            <img src={url} alt="" />
        </div>
    </div>
  )
}
export default ItemCard
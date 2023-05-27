import { useEffect, useState } from "react"
import { axiosWarframe } from "../utils/configAxios"
import ItemCard from "../components/items/ItemCard"

const Items = () => {
    const [allItems, setAllItems] = useState()
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axiosWarframe.get("items")
        .then( (res) => {
            setAllItems(res.data)
            const listCategories = []
            res.data.forEach( (item) => {
                if (!listCategories.includes(item.category)) {
                    listCategories.push(item.category)
                }
            });
            setCategories(listCategories)            
        })
        .catch( (err) => console.log(err)) 
    }, [])
    
    
  return (
    <div>
        {
            categories?.map( (item) => <div>{item}</div> )
        }
        <div>
            {
                allItems?.slice(0,100).map( ( item ) => 
                <ItemCard item={item}/>)
            }
        </div>

    </div>
  )
}
export default Items
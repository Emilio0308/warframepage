export const imgUrl = (item) => {
    const  url = `https://raw.githubusercontent.com/wfcd/warframe-items/master/data/img/${item?.imageName}`
    return { url }
}
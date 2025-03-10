export const getgifs=async(category)=>{
    console.log(category)
    const url=`https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=iuyPSO6Wbna0fN36t1OlC5eVZXg8x1XE`
    const resp=await fetch(url)
    const {data}=await resp.json()
    const gifs=data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }
    })
    return gifs
}
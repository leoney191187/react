import { useState, useEffect } from 'react';
import { getgifs } from '../helpers/gitget';


export const useFetchGifs = (category) => {
     const [images, setImages] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

     const getImages=async()=>{
         const gifs=await getgifs(category)
         console.log(gifs)
         setImages(gifs)
            setIsLoading(false)

        
     }
     useEffect(() => {

         getImages()

     }, []);
    return {
        images:images,
        isLoading:true
    }
};
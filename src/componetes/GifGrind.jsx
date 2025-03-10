import { useEffect,useState } from 'react';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrind = ({category}) => {
    const{images,isLoading}=useFetchGifs(category)
    console.log(images,isLoading)
    
    return (
        <>
             {isLoading && (<p>cargado::::</p>)}
             <h3>{category}</h3>
            
            <div className="card-grid">
                {
                    images.map((img,i)=>
                        <GifItem key={i} {...img} />
                        
                    )
                }
            </div>
        </>
    );
};

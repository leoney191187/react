import { useState } from "react"
import {  AddCategory  } from "./componetes/addCategory"
import { GifGrind } from "./componetes/GifGrind"


export const GifExpertapp=()=>{
   const[categorias,setCategorias]= useState(["one puch man"])
   const agregar=()=>{
      setCategorias([...categorias,"dan da"])
   }
   const onAddCategory=(category)=>{
          if(categorias.includes(category)){
              return
          }
         setCategorias([...categorias,category])
   }
    return(
        <>
        <h1>
            gif app
        </h1>


       <AddCategory onNewCategory={event=>onAddCategory(event)}/>
        
        {
        categorias.map((category,i)=>
        <GifGrind category={category} key={i} />
        )}
        </>
    )
}     
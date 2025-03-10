import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
  const [first,setfirst]=useState("")
  const onInputchange=(event)=>{
    setfirst(event.target.value)
  }
  const onSubmi=(event)=>{
    event.preventDefault();
    if(first.trim().length<=1)return;
    // setCategorias(categories=>[...categories,first])
    onNewCategory(first.trim())
    console.log("submit")
  }
    return (
      <form onSubmit={(event) => onSubmi(event)}>
        <input type="tex"
         placeholder="intodusca nombre" 
         value={first} 
         onChange={onInputchange}/>
      </form>
      
    )
  }
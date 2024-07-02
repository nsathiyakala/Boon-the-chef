import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Search() {

 const [keyword, setkeyword]= useState("")
 const navigate = useNavigate()

 const searchHandler=(e)=>{
      e.preventDefault()
      navigate("/search?keyword="+keyword)
 }

  return (
    <>
    <form className="d-flex mb-3" role="search" onSubmit={searchHandler}>
      <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Search" 
        aria-label="Search" 
        onChange={(e)=>{setkeyword(e.target.value)}}
        onBlur={searchHandler}
      />
      <button 
        className="btn search-btn" 
        type="submit" 
      >
        Search
      </button>
    </form>  
    </>
  );
}

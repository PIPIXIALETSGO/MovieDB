import React,{ useEffect } from "react";


function Filter({setActiveGenre,setFilter,popular,activeGenre}){
    useEffect(()=>{
          if(activeGenre===0){
              setFilter(popular)
              return;
          }
          const filtered=popular.filter((movie)=>movie.genre_ids.includes(activeGenre))
          setFilter(filtered)
    },[activeGenre])
    return(
        <div className="filerContainer">
            <button className={activeGenre===0 ?"active":""} onClick={()=>setActiveGenre(0)}>All</button>
            <button className={activeGenre===35 ?"active":""}  onClick={()=>setActiveGenre(35)}>Comedy</button>
            <button className={activeGenre===28 ?"active":""} onClick={()=>setActiveGenre(28)}>Action</button>
            <button className={activeGenre===12 ?"active":""} onClick={()=>setActiveGenre(12)}>Adventure</button>
            <button className={activeGenre===16 ?"active":""} onClick={()=>setActiveGenre(16)}>Animation</button>
            <button className={activeGenre===80 ?"active":""} onClick={()=>setActiveGenre(80)}>Crime</button>
            <button className={activeGenre===14 ?"active":""} onClick={()=>setActiveGenre(14)}>Fantasy</button>
        </div>
    )
}
export default Filter
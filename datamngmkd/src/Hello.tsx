import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export const Hello = ()=>{
    const [count,setCount] = useState(()=>{
        if(localStorage.getItem('count') !== null){
          if(JSON.parse(String(localStorage.getItem('count'))) !== null){
            return Number(JSON.parse(String(localStorage.getItem('count'))));
          }
        }
        return 0;
      });
      const {data,loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
    
    
    
      useEffect(()=>{
        localStorage.setItem('count',JSON.stringify(count));
      },[count])

   return <>
         <div>{loading ? "loading...": data}</div>
        <div>count: {count}</div>
        <button onClick={()=>setCount(c=>c+1)}>increment</button>
     
   </>
}
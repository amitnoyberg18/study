import React, { useEffect, useState } from 'react';
// import { Hello } from './Hello';
import { useFetch } from './useFetch';
import { useForm } from './useForm';

const App = ()=> {
  // const [{count,count2},setCount] = useState<{count:number,count2:number}>({count:10,count2:20});
  const [values,handleChange] = useForm({email: '', password:'', firstName:''});
  // const [showHello,setShowHello] = useState(true)

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
  return (
    <div className="App">
      <div>{loading ? "loading...": data}</div>
      <div>count: {count}</div>
      <button onClick={()=>setCount(c=>c+1)}>increment</button>
      {/* <button onClick={()=>setShowHello((prevshowHello)=>!prevshowHello)}>toggle</button>
      {showHello && <Hello />} */}
      <>
      <div>
      <input 
        type = "email" 
        name = "email" 
        placeholder="myUser@gmail.com"
        value = {values.email}
        onChange = {handleChange}
        />
      <input
        type = "password" 
        name = "password" 
        placeholder="password"
        value = {values.password}
        onChange = {handleChange}
        />
      <input
        type ="text" 
        name = "firstName"
        placeholder="First Name " 
        value = {values.firstName}
        onChange = {handleChange}
        />
        </div>
        </>
        
    </div>
  );
}

export default App;

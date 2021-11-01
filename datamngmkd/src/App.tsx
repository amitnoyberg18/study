import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import { Hello } from './Hello';
import { useFetch } from './useFetch';
import { useForm } from './useForm';

const App = ()=> {
  // const [{count,count2},setCount] = useState<{count:number,count2:number}>({count:10,count2:20});
  const [values,handleChange] = useForm({email: '', password:'', firstName:''});
  const [showHello,setShowHello] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const hello = useRef(()=>{
    console.log("fsf")
  });

  return (
    <div className="App">
       <button onClick={()=>setShowHello((prevshowHello)=>!prevshowHello)}>toggle</button>
      {showHello && <Hello />}
      <>
      <div>
      <input 
        ref = {inputRef}
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
        <button onClick={()=>{
          inputRef.current?.focus()
        }}>Focus</button>
        </>
        
    </div>
  );
}

export default App;

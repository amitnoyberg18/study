import React from 'react';
import { useForm } from './useForm';

const App = ()=> {
  // const [{count,count2},setCount] = useState<{count:number,count2:number}>({count:10,count2:20});
  const [values,handleChange] = useForm({email: '', password:''});

  return (
    <div className="App">
      <input 
        type = "email" 
        name = "email" 
        value = {values.email}
        onChange = {handleChange}
        />
      <input 
        type = "password" 
        name = "password" 
        value = {values.password}
        onChange = {handleChange}
        />
    </div>
  );
}

export default App;

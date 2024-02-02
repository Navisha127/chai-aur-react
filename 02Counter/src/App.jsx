import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  const AddValue=() =>{
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const RemoveValue=()=>{
   if(count>10){
    setCount(count-1)
   }
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {count}</h2>
    <button onClick={AddValue}>Add Value</button>
    <button onClick={RemoveValue}>Remove Value</button>

    </>
  );
}

export default App;

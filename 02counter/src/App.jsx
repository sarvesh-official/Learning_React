
import { useState } from 'react'
import './App.css'

function App() {
  
let [counter,setCounter] = useState(0)
  return (
    <>
      <h1>Counter with React</h1>
      <h2>Count: {counter}</h2>
      <button onClick={()=>{setCounter(counter + 1)}}>+</button>{" "}
      <button onClick={()=>{ if (counter >=0 ) setCounter(counter - 1)}}>-</button>
    </>
  )
}

export default App

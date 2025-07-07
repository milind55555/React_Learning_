import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=5
  const [counter,setCouter]=useState(15)

  const AddValue=()=>{

   setCouter(counter+1)
   setCouter(counter+1)
   setCouter(counter+1)
   setCouter(counter+1)
   setCouter(counter+1) //uses fibre react 
    
    
  }

  const RemoveValue=()=>{
    if(counter<= 0){
      setCouter(counter)
    }else{
      setCouter(counter-1)
    }
    
  }
  

  return (
    <>
    <h1>Chai Aur Chai </h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={AddValue}
    >Increase Value</button><br />
    <button onClick={RemoveValue}>Decrease value</button>
    </>
  )
}

export default App

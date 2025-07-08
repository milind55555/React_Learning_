import { useState ,useCallback,useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [Length,setLength] =useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [CharAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  // useRef hook to store the password generator function
  const passwordRef = useRef(null)
  
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed ) str += "0123456789"
    if(CharAllowed) str += "!@#$%^&*()[]{}"

    for(let i=1;i <= Length ; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass +=str.charAt(char)

    }

    setPassword(pass)

    
  } ,[length,numberAllowed,CharAllowed,setPassword])

  const copyPasswordToClickboard =  useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999); // For mobile devices
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[Length,numberAllowed,CharAllowed,passwordGenerator])

  return (
  <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-800'>
       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <h1 className="text-gray">Password Generator</h1>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
         />
         <button
         onClick={copyPasswordToClickboard}
         >
        copy
       </button>

       </div>

       <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
             type="range"
             min={6}
             max={100}
             className='cursor-pointer'
             onChange={(e)=>setLength(e.target.value)}
            
            />
            <label>Length:{Length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=> !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={CharAllowed}
              id="charInput"
              onChange={()=>{
                setCharAllowed((prev)=> !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>






       </div>
       
       
       </div>

  </>
  )
}

export default App

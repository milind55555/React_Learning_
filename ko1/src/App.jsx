import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className="bg-red-500 text-white p-10 text-4xl"> Hello Brother!!</h1>
   <div className="bg-red-500 text-white p-10 text-4xl">
      If this is red, Tailwind works!
    </div>
   </>
  )
}

export default App

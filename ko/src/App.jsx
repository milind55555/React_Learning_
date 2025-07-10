import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className='text-bold font-bold underline flex items-center justify-center text-red-700'>Hello BrotherS</h1>
   <h2 className='underline items-center flex justify-center text-blue-800'>JSX hhd</h2>
   {/* //npm install -D @tailwindcss/postcss
   //postcss.config.js
   //module.exports = {
//   plugins: {
//     '@tailwindcss/postcss': {},
//     autoprefixer: {},
//   },
// } */}
   </>
  )
}

export default App

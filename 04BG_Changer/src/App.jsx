import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color, setColor] = useState("olive")

  
  return (
    <div
      className="w-full h-screen duration-200 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center gap-3 shadow-lg px-2 py-3 rounded-xl bg-changer-panel">
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg bg-changer-btn"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg bg-changer-btn"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg bg-changer-btn"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg bg-changer-btn"
          style={{ backgroundColor: "orange" }}
        >
          Orange
        </button>
        <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg bg-changer-btn"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>
      </div>
    </div>
  )

}

export default App

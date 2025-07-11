import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='text-blue-500 underline flex justify-center bg-yellow-500 h-screen items-center'>Hello Chetan Boss</h2>
    {/* 
    Step 1:rm -rf node_modules package-lock.json   
npm uninstall postcss autoprefixer @tailwindcss/vite-plugin
    
    Step 2 :npm install -D tailwindcss @tailwindcss/vite
Update vite.config.js (or vite.config.ts)

js
Copy
Edit
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'   // ⬅️ new plugin

export default defineConfig({
  plugins: [react(), tailwind()],
})
Convert your CSS entry file (src/index.css, src/app.css, etc.)

css
Copy
Edit
/* ONE line replaces the old @tailwind directives */
/*@import "tailwindcss";
Delete postcss.config.js (the plugin handles everything).

Run the dev server

bash
Copy
Edit
npm run dev
Tailwind classes should now compile without errors */}
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const lightTheme =()=>{
    setThemeMode("light")
  }
  const darkTheme =()=>{
    setThemeMode("dark")
  }


  //actual change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')

    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
          
  <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
   <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* ThemBtn */}
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card */}
                       <Card />
                    </div>
                </div>
            </div>
   </ThemeProvider>
  )
}

export default App

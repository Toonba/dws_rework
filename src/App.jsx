import { useEffect, useState } from 'react'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Introduction from './Components/Introduction/introduction'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  console.log(windowWidth, windowWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setIsMobile(windowWidth < 768)
  }, [windowWidth])

  return (
    <>
      <header className="w-screen bg-gradient-to-b from-headerBlueStart to-headerBlueEnd text-white font-bold ">
        <div className="max-w-7xl w-full md:pl-40 pl-10"> DEEP WATER STUDIO</div>
      </header>
      <Hero isMobile={isMobile} />
      <Introduction isMobile={isMobile} />
      <Skills isMobile={isMobile} />
      <Projects isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </>
  )
}

export default App

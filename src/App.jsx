import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Introduction from './Components/Introduction/introduction'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

function App() {
  return (
    <>
      <header className="w-screen pl-40 bg-gradient-to-b from-headerBlueStart to-headerBlueEnd text-white font-bold ">DEEP WATER STUDIO</header>
      <Hero />
      <Introduction />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App

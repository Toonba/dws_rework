import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { useRef } from 'react'
import useMeasure from 'react-use-measure'
import { projects } from '../../Data/projectsData'
import CardDeck from '../CardDeck/CardDeck'

const slider = {
  enter: ({ direction, width }) => ({ opacity: 0, scale: 0, x: direction * width }),
  center: { opacity: 1, scale: 1, x: 0 },
  exit: ({ direction, width }) => ({ opacity: 0, scale: 0, x: direction * -width })
}

function Projects() {
  const [current, setCurrent] = useState(0)
  const [ref, { width }] = useMeasure()
  const [direction, setDirection] = useState(0)

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['center end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0])

  const nextProject = () => {
    if (current === projects.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
    setDirection(1)
  }

  const prevProject = () => {
    if (current === 0) {
      setCurrent(projects.length - 1)
    } else {
      setCurrent(current - 1)
    }
    setDirection(-1)
  }

  return (
    <>
      <section ref={targetRef} className="w-screen h-screen text-white">
        <motion.div style={{ opacity }} className="max-w-7xl w-full h-full m-auto">
          <h2 className="text-6xl  text-yellow-300 font-bagel">Projects</h2>
          <p className=" pt-4 text-xl">Recent projects that we loved working on.</p>
          <div ref={ref} className="flex justify-between items-center w-full h-3/4 m-auto mt-10 relative overflow-hidden">
            <div className="flex justify-center items-center h-1/4 rounded-2xl hover:bg-slate-900" onClick={prevProject}>
              <i className="fa-solid fa-chevron-left flex-1 cursor-pointer text-4xl p-2 text-yellow-300"></i>
            </div>
            <AnimatePresence custom={{ direction, width }}>
              <motion.div key={current} variants={slider} initial="enter" animate="center" exit="exit" custom={{ direction, width }} transition={{ duration: 0.4 }} className="w-3/12 [aspect-ratio:7/9] absolute m-auto inset-1">
                <CardDeck project={projects[current]} />
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center items-center h-1/4 rounded-2xl hover:bg-slate-900" onClick={nextProject}>
              <i className="fa-solid fa-chevron-right flex-1 cursor-pointer text-4xl p-2 text-yellow-300"></i>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Projects

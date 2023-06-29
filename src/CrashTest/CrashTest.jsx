import { motion } from 'framer-motion'
import { useState } from 'react'
import useMeasure from 'react-use-measure'

function CrashTest() {
  const [animationCard1, setAnimationCard1] = useState({ transform: 'rotateY(180deg)' })
  const [animationCard2, setAnimationCard2] = useState({ transform: 'rotateY(0deg)' })
  const [animationLink, setAnimationLink] = useState({ y: 0, scale: 0 })
  const [ref, { height }] = useMeasure()

  const handleClickCard1 = () => {
    setAnimationCard1({ transform: 'rotateY(180deg)' })
    setAnimationCard2({ transform: 'rotateY(0deg)' })
    setAnimationLink({ y: 0, scale: 0 })
  }
  const handleClickCard2 = () => {
    setAnimationCard2({ transform: 'rotateY(180deg)' })
    setAnimationCard1({ transform: 'rotateY(0deg)' })
    setAnimationLink({ y: height / 1.6, scale: 1 })
  }

  return (
    <>
      <section className="h-screen flex justify-center item">
        <div className="w-4/5 h-full relative">
          <motion.a href="#" initial={{ y: 0, scale: 0 }} animate={animationLink} transition={{ duration: 0.5 }} className="absolute md:w-1/2 w-1/4 h-[6vw] m-auto inset-1 flex justify-center items-center bg-blue-950 rounded-xl hover:bg-blue-500 border border-yellow-200">
            <div className="w-full md:text-2xl text-[3vw] text-center text-yellow-300 font-bagel">Take a look</div>
          </motion.a>
          <motion.div ref={ref} initial={{ transform: 'rotateY(180deg)' }} animate={animationCard1} transition={{ duration: 1 }} onClick={handleClickCard1} className="w-2/3 [aspect-ratio:7/9] m-auto flex flex-col justify-around absolute top-0 left-0 inset-1 bg-blue-950 rounded-xl overflow-hidden border [transform-style: preserve-3d] [backface-visibility:hidden] border-yellow-200"></motion.div>
          <motion.div initial={{ transform: 'rotateY(0deg)' }} animate={animationCard2} transition={{ duration: 1 }} onClick={handleClickCard2} className="w-2/3 [aspect-ratio:7/9] absolute m-auto [transform-style: preserve-3d] [backface-visibility:hidden] inset-1 border border-yellow-200 bg-red-950 rounded-xl overflow-hidden">
            {' '}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default CrashTest

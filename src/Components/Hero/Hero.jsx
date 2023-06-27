import fish from '../../Assets/dws_off.png'
import light from '../../Assets/light.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Hero() {
  // Creating hacker effect on h1>span
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const hackerStyle = (e) => {
    let iterations = 0
    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split('')
        .map((letter, index) => {
          if (index < iterations) {
            return e.target.dataset.value[index]
          }
          return letters[Math.floor(Math.random() * 26)]
        })
        .join('')
      if (iterations >= e.target.dataset.value.length) {
        clearInterval(interval)
      }
      iterations += 1 / 3
    }, 30)
  }

  //scroll animation
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 0])

  return (
    <section ref={targetRef} className="relative w-screen h-[90vh] bg-gradient-to-b from-headerBlueEnd to-black text-white flex justify-center items-center">
      <motion.div style={{ opacity, scale }} className="max-w-7xl w-full fixed">
        <motion.div initial={{ opacity: 0, scale: 0, x: -200 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 2.5, type: 'spring' }} className="w-[200px] aspect-square m-auto relative z-10">
          <img className="w-full absolute top-0" src={fish} alt="dws logo" />
          <img className="absolute top-[-17px] right-[-60px] animate-pulse" src={light} alt="dws light" />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, scale: 0, y: -100 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 2, type: 'spring', delay: 1 }} className="w-1/2 m-auto text-center text-6xl ">
          We build digital{' '}
          <span data-value="EXPERIENCES" /*onMouseEnter={(e) => hackerStyle(e)}*/ className="text-yellow-300 font-bagel">
            EXPERIENCES
          </span>
        </motion.h1>
      </motion.div>
    </section>
  )
}

export default Hero

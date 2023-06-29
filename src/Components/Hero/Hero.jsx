import fish from '../../Assets/dws_off.png'
import light from '../../Assets/light.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import PropTypes from 'prop-types'

function Hero({ isMobile }) {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  console.log(isMobile)

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 0])

  return (
    <section ref={targetRef} className="relative w-screen h-[90vh] bg-gradient-to-b from-headerBlueEnd to-black text-white flex justify-center items-center">
      <motion.div style={{ opacity: isMobile ? 1 : opacity, scale: isMobile ? 1 : scale }} className="max-w-7xl md:w-full w-2/3 md:fixed">
        <motion.div initial={isMobile ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0, x: -200 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 2.5, type: 'spring' }} className="w-[200px] aspect-square m-auto relative z-10">
          <img className="w-full absolute top-0" src={fish} alt="dws logo" />
          <img className="absolute top-[-17px] right-[-60px] animate-pulse" src={light} alt="dws light" />
        </motion.div>
        <motion.h1 initial={isMobile ? {} : { opacity: 0, scale: 0, y: -100 }} animate={isMobile ? {} : { opacity: 1, scale: 1, y: 0 }} transition={{ duration: 2, type: 'spring', delay: 1 }} className="md:w-1/2 w-full m-auto text-center md:text-6xl text-3xl">
          We build digital{' '}
          <span data-value="EXPERIENCES" className="text-yellow-300 font-bagel">
            EXPERIENCES
          </span>
        </motion.h1>
      </motion.div>
    </section>
  )
}

export default Hero

Hero.propTypes = {
  isMobile: PropTypes.bool.isRequired
}
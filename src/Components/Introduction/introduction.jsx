import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Introduction() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['center end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.7], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.7], [0, 1.2, 0])

  return (
    <>
      <section ref={targetRef} className="w-screen h-screen flex justify-center items-center relative">
        <motion.p style={{ scale, opacity }} className="max-w-7xl w-2/3 text-white text-2xl text-center fixed top-1/2">
          Deep Water Studios has specialists for all facets of the digital experience. Whether it’s <motion.span className=" text-3xl text-yellow-200 font-bagel whitespace-nowrap">web development</motion.span>, <motion.span className="text-3xl text-yellow-200 font-bagel whitespace-nowrap">smart contracts</motion.span>, or <motion.span className="text-3xl text-yellow-200 font-bagel whitespace-nowrap">back-end infrastructure</motion.span>, we have a track record of delivering top-tier products.
        </motion.p>
      </section>
    </>
  )
}

export default Introduction

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import PropTypes from 'prop-types'

function Introduction({ isMobile }) {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end center']
  })

  const opacity = useTransform(scrollYProgress, [0.1, 1], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1.2])

  return (
    <>
      <section className="w-screen md:h-[10vh] h-[50vh] flex justify-center items-center relative">
        <motion.p ref={targetRef} style={{ scale: isMobile ? 1 : scale, opacity: isMobile ? 1 : opacity }} className="max-w-7xl w-5/6 text-white md:text-2xl text-lg text-center md:sticky top-2">
          Deep Water Studios has specialists for all facets of the digital experience. Whether it’s <span className=" md:text-3xl text-lg text-yellow-200 font-bagel whitespace-nowrap">web development</span>, <span className="md:text-3xl text-lg text-yellow-200 font-bagel whitespace-nowrap">smart contracts</span>, or <span className="md:text-3xl text-lg text-yellow-200 font-bagel whitespace-nowrap">back-end infrastructure</span>, we have a track record of delivering top-tier products.
        </motion.p>
      </section>
    </>
  )
}

export default Introduction

Introduction.propTypes = {
  isMobile: PropTypes.bool.isRequired
}

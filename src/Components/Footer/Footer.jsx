import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import PropTypes from 'prop-types'

function Footer({ isMobile }) {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.6], [0, 0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.6], [0, 1.2])

  return (
    <>
      <footer ref={targetRef} className="w-screen md:h-screen h-[50vh] text-white flex justify-center items-center relative">
        <motion.div style={{ opacity: isMobile ? 1 : opacity, scale: isMobile ? 1 : scale }} className="max-w-7xl md:w-1/2 w-full h-1/2 flex flex-col justify-center items-center md:fixed top-1/3">
          <h3 className="md:text-5xl text-3xl mb-5 text-yellow-300 font-bagel">Let's Talk</h3>
          <p className="text-center md:text-xl text-base md:w-full w-5/6">
            Ready to transform your idea into digital experience? So are we! Let's hop on a call. contact us at{' '}
            <a className="font-bold underline underline-offset-2 " href="mailto:hello@deepwaterstudios.xyz">
              hello@deepwaterstudios.xyz
            </a>{' '}
            or on Twitter{' '}
            <a className="text-[#1DA1F2] " href="https://www.twitter.com/deepwaterstudios">
              @deepwaterstudios
            </a>
          </p>
        </motion.div>
      </footer>
    </>
  )
}

export default Footer

Footer.propTypes = {
  isMobile: PropTypes.bool.isRequired
}

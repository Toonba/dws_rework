import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Footer() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['center end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.4], [0, 1.2])

  return (
    <>
      <footer ref={targetRef} className="w-screen h-screen text-white flex justify-center items-center relative">
        <motion.div style={{ opacity, scale }} className="w-1/2 h-1/2 flex flex-col justify-center items-center fixed top-1/3">
          <h3 className="text-5xl mb-5 text-yellow-300 font-bagel">Let's Talk</h3>
          <p className="text-center text-xl">
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

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { skillsData } from '../../Data/skillsData'
import PropTypes from 'prop-types'

function Skills({ isMobile }) {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['center end', 'end start']
  })

  const x = useTransform(scrollYProgress, [0.1, 0.7], ['100%', '-50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.7], [0, 1, 0])

  return (
    <>
      <section ref={targetRef} className="w-screen h-screen flex justify-center items-center text-white md:overflow-hidden relative">
        <motion.div style={{ x: isMobile ? 0 : x, opacity: isMobile ? 1 : opacity }} className=" max-w-7xl w-5/6 md:h-1/4 md:flex md:justify-between md:items-start gap-8 md:fixed top-1/2">
          {skillsData.map((skill, index) => {
            return (
              <div className="pt-4" key={`${skill.title}-${index}`}>
                <h3 className="text-3xl text-yellow-200 font-bagel whitespace-nowrap">{skill.title}</h3>
                <p className="pt-1">{skill.description}</p>
              </div>
            )
          })}
        </motion.div>
      </section>
    </>
  )
}

export default Skills

Skills.propTypes = {
  isMobile: PropTypes.bool.isRequired
}

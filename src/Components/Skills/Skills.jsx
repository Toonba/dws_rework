import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { skillsData } from '../../Data/skillsData'

function Skills() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['center end', 'end start']
  })

  const x = useTransform(scrollYProgress, [0.1, 0.7], ['100%', '-50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.6], [0, 1, 0])

  return (
    <>
      <section ref={targetRef} className="w-screen h-screen flex justify-center items-center text-white overflow-hidden relative">
        <motion.div style={{ x, opacity }} className="w-[90vw] h-1/4 flex justify-between items-start gap-8 fixed top-1/2">
          {skillsData.map((skill, index) => {
            return (
              <motion.div /*initial={{ x: -100, scale: 0, opacity: 0 }} whileInView={{ x: 0, scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 * index }}*/ div className="" key={`${skill.title}-${index}`}>
                <h3 className="text-3xl text-yellow-200 font-bagel whitespace-nowrap">{skill.title}</h3>
                <p className="pt-1">{skill.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </section>
    </>
  )
}

export default Skills

import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { useState } from 'react'
import useMeasure from 'react-use-measure'

const summaryMotion = {
  rest: { x: 0, rotate: '-1deg' },
  hover: {
    x: -300,
    rotate: '-5deg',
    transition: {
      duration: 1,
      type: 'spring',
      ease: 'easeIn'
    }
  }
}

const detailsMotion = {
  rest: { x: 0, rotate: '1deg' },
  hover: {
    x: 300,
    rotate: '5deg',
    transition: {
      duration: 1,
      type: 'spring',
      ease: 'easeIn'
    }
  }
}

const linkMotion = {
  rest: { y: -100 },
  hover: {
    y: 0,
    transition: {
      duration: 1.2,
      type: 'spring',
      ease: 'easeIn'
    }
  }
}

function CardDeck({ project, isMobile }) {
  const [animationCard1, setAnimationCard1] = useState({ transform: 'rotateY(180deg)' })
  const [animationCard2, setAnimationCard2] = useState({ transform: 'rotateY(0deg)' })
  const [ref, { height }] = useMeasure()
  console.log(height)

  const handleClickCard1 = () => {
    setAnimationCard1({ transform: 'rotateY(180deg)' })
    setAnimationCard2({ transform: 'rotateY(0deg)' })
  }
  const handleClickCard2 = () => {
    setAnimationCard2({ transform: 'rotateY(180deg)' })
    setAnimationCard1({ transform: 'rotateY(0deg)' })
  }

  return (
    <>
      <motion.article initial="rest" whileHover="hover" className="w-full h-full relative">
        {isMobile ? (
          <>
            <motion.div ref={ref} initial={{ transform: 'rotateY(180deg)' }} animate={animationCard1} transition={{ duration: 1 }} onClick={handleClickCard1} className="w-2/3 [aspect-ratio:6/9] m-auto flex flex-col justify-around absolute top-0 left-0 inset-1 bg-blue-950 rounded-xl overflow-hidden border [transform-style: preserve-3d] [backface-visibility:hidden] border-yellow-200">
              <div>
                <h3 className="w-full text-center text-[4vw] pb-1 underline underline-offset-4 text-yellow-300 font-bagel">Description</h3>
                <p className="text-[2vw] w-full p-2">{project.description}</p>
              </div>
              <div>
                <h3 className="w-full text-center text-[4vw] pb-1 underline underline-offset-4 text-yellow-300 font-bagel">Scope</h3>
                <ul className="p-2">
                  {project.scope.map((item, index) => {
                    return (
                      <li className="text-[2vw] w-full" key={`${item}-${index}`}>
                        {item}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>

            <motion.div initial={{ transform: 'rotateY(0deg)' }} animate={animationCard2} transition={{ duration: 1 }} onClick={handleClickCard2} className="w-2/3 [aspect-ratio:6/9] absolute m-auto [transform-style: preserve-3d] [backface-visibility:hidden] inset-1 border border-yellow-200 bg-blue-950 rounded-xl overflow-hidden">
              <img className="w-full aspect-square" src={project.picture} alt={`${project.title} logo`} />
              <div className={`flex flex-col gap-4 justify-center w-full items-center h-1/2`}>
                <h3 className="text-[6vw] w-full text-center md:pt-4 text-yellow-300 font-bagel m-0">{project.title}</h3>
                <a href={project.link} className="w-1/2 h-[6vw] flex justify-center items-center bg-blue-950 rounded-xl hover:bg-blue-500 border z-20 border-yellow-200">
                  <div className="w-full md:text-2xl text-[3vw] text-center text-yellow-300 font-bagel">Take a look</div>
                </a>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <motion.a href={project.link} variants={linkMotion} className="absolute md:w-1/2 w-[99%] aspect-video m-auto inset-1 flex justify-center items-center bg-blue-950 rounded-xl hover:bg-blue-500 border border-yellow-200">
              <div className="w-full md:text-2xl text-sm text-center text-yellow-300 font-bagel">Take a look</div>
            </motion.a>
            <motion.div variants={detailsMotion} className="w-full [aspect-ratio:7/9] m-auto flex flex-col justify-around absolute inset-1 bg-blue-950 rounded-xl overflow-hidden border border-yellow-200">
              <div>
                <h3 className="w-full text-center text-2xl pb-1 underline underline-offset-4 text-yellow-300 font-bagel">Description</h3>
                <p className="text-xs w-full p-2">{project.description}</p>
              </div>
              <div>
                <h3 className="w-full text-center text-2xl pb-1 underline underline-offset-4 text-yellow-300 font-bagel">Scope</h3>
                <ul className="p-2">
                  {project.scope.map((item, index) => {
                    return (
                      <li className="text-xs w-full pb-1" key={`${item}-${index}`}>
                        {item}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>
            <motion.div variants={summaryMotion} className="w-full [aspect-ratio:7/9] absolute m-auto inset-1 border border-yellow-200 bg-blue-950 rounded-xl overflow-hidden">
              <img className="w-full aspect-square" src={project.picture} alt={`${project.title} logo`} />
              <h3 className="text-4xl w-full text-center pt-5 text-yellow-300 font-bagel">{project.title}</h3>
            </motion.div>
          </>
        )}
      </motion.article>
    </>
  )
}

export default CardDeck

CardDeck.propTypes = {
  project: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired
}

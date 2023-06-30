import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

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

function CardDeckBowser({ project }) {
  return (
    <>
      <motion.a href={project.link} variants={linkMotion} className="absolute md:w-1/2 w-[99%] h-[6vw] m-auto inset-1 flex justify-center items-center bg-blue-950 rounded-xl hover:bg-blue-500 border border-yellow-200">
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
  )
}

export default CardDeckBowser

CardDeckBowser.propTypes = {
  project: PropTypes.object.isRequired
}

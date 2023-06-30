import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { useState } from 'react'

function CardDeckMobile({ project }) {
  const [animationCard1, setAnimationCard1] = useState({ transform: 'rotateY(180deg)' })
  const [animationCard2, setAnimationCard2] = useState({ transform: 'rotateY(0deg)' })

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
      <motion.div initial={{ transform: 'rotateY(180deg)' }} animate={animationCard1} transition={{ duration: 1 }} onClick={handleClickCard1} className="w-2/3 [aspect-ratio:6/9] m-auto flex flex-col justify-around absolute top-0 left-0 inset-1 bg-blue-950 rounded-xl overflow-hidden border border-yellow-200[transform-style: preserve-3d] [backface-visibility:hidden]">
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

      <motion.div initial={{ transform: 'rotateY(0deg)' }} animate={animationCard2} transition={{ duration: 1 }} onClick={handleClickCard2} className="w-2/3 [aspect-ratio:6/9] absolute m-auto  inset-1 border border-yellow-200 bg-blue-950 rounded-xl overflow-hidden [transform-style: preserve-3d] [backface-visibility:hidden]">
        <img className="w-full aspect-square" src={project.picture} alt={`${project.title} logo`} />
        <div className="flex flex-col gap-3 justify-center w-full items-center h-1/3 relative">
          <h3 className="text-[6vw] w-full text-center text-yellow-300 font-bagel m-0">{project.title}</h3>
          <a href={project.link} className="w-1/2 h-[6vw] flex justify-center items-center bg-blue-950 rounded-xl hover:bg-blue-500 border border-yellow-200">
            <div className="w-full text-[3vw] text-center text-yellow-300 font-bagel">Take a look</div>
          </a>
        </div>
      </motion.div>
    </>
  )
}

export default CardDeckMobile

CardDeckMobile.propTypes = {
  project: PropTypes.object.isRequired
}

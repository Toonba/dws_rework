import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import CardDeckMobile from './CardDeckMobile'
import CardDeckBowser from './CardDeckBowser'

function CardDeck({ project, isMobile }) {
  return (
    <>
      <motion.article initial="rest" whileHover="hover" className="w-full h-full relative">
        {isMobile ? <CardDeckMobile project={project} /> : <CardDeckBowser project={project} />}
      </motion.article>
    </>
  )
}

export default CardDeck

CardDeck.propTypes = {
  project: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired
}

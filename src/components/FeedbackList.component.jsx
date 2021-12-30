import { useContext } from 'react'

import FeedbackContext from '../context/Feedback.context'

import FeedbackItem from './FeedbackItem.component'

import { motion, AnimatePresence } from 'framer-motion'
import Card from './shared/Card.component'

const FeedbackList = ({ handleDelete }) => {
  const { feedback } = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return (
      <Card reverse={true}>
        <p>No Feedback yet!</p>
      </Card>
    )
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList

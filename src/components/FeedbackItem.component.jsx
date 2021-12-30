import PropTypes from 'prop-types'

import { useContext } from 'react'
import FeedbackContext from '../context/Feedback.context'

import * as Icon from 'react-icons/fa'

import Card from './shared/Card.component'

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <Icon.FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <Icon.FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.prototype = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem

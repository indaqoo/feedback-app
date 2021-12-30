import { useState } from 'react'

import Header from './components/Header.component'
import FeedbackList from './components/FeedbackList.component'

import FeedbackData from './data/FeedbackData'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App

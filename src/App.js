import { useState } from 'react'

import { v4 as UUID } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header.component'
import FeedbackList from './components/FeedbackList.component'
import FeedbackStats from './components/FeedbackStats.component'
import FeedbackForm from './components/FeedbackForm.component'
import AboutIconLink from './components/AboutIconLink.component'

import About from './pages/About.page'

import FeedbackData from './data/FeedbackData'
import { FeedbackProvider } from './context/Feedback.context'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = UUID()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>

            <Route path='/about' element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App

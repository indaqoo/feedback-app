import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header.component'
import FeedbackList from './components/FeedbackList.component'
import FeedbackStats from './components/FeedbackStats.component'
import FeedbackForm from './components/FeedbackForm.component'
import AboutIconLink from './components/AboutIconLink.component'

import About from './pages/About.page'

import { FeedbackProvider } from './context/Feedback.context'

const App = () => {
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
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
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

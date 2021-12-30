import Card from '../components/shared/Card.component'

import { useNavigate } from 'react-router-dom'
import Button from '../components/shared/Button.component'

const About = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/')
  }

  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a React App to leave a feedback for a product or service</p>
        <p>Version: 1.0.0</p>

        <button onClick={onClick} className='btn btn-secondary'>
          back to home
        </button>
      </div>
    </Card>
  )
}

export default About

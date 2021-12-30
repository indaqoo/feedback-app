import Card from '../components/shared/Card.component'

const About = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a React App to leave a feedback for a product or service</p>
        <p>Version: 1.0.0</p>

        <p>
          <a href='/'>back to home</a>
        </p>
      </div>
    </Card>
  )
}

export default About

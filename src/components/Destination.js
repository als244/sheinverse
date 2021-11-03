import { Link } from 'react-router-dom'
import Button from './Button'

const Destination = () => {
  return (
    <div>
      <h1> You made it to Destination! </h1>
      <Link to='/'>
        <Button text="Go Back" color="red"/>
      </Link>
    </div>
  )
}

export default Destination

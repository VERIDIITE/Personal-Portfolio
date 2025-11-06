import { Timeline } from '../components/Timeline'
import { experiences } from '../constants'

const Experience = () => {
  return (
    <div id="work" className='w-full'>
        <Timeline data={experiences}/>
    </div>
  )
}

export default Experience
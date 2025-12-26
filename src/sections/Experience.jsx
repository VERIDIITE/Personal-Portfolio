import { Timeline } from '../components/Timeline'
import { experiences } from '../constants'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Experience = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

  return (
    <div
      ref={sectionRef}
      id="work"
      className={`w-full scroll-reveal-scale ${isVisible ? 'visible' : ''}`}
    >
        <Timeline data={experiences}/>
    </div>
  )
}

export default Experience
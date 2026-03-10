import Hero from '../components/Hero'
import Process from '../components/Process'
import Team from '../components/Team'
import Contact from '../components/Contact'

const ProcessPage = () => {
  const description = "Our streamlined process ensures efficient collaboration and timely delivery of high-quality digital products."

  return (
    <div>
            <Hero showHero={false} />

      <Hero 
      
        title="Our Process" 
        tagline="From Concept to Launch"
        description={description}
        buttons={false}
      />
      <Process />
      <Team />
      <Contact />
    </div>
  )
}

export default ProcessPage
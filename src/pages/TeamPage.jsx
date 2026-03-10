import Hero from '../components/Hero'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const TeamPage = () => {
  const description = "Meet the passionate experts behind Samsee Tech Solution. Our team combines technical prowess with creative vision."

  return (
    <div>
            <Hero showHero={false} />

      <Hero 
        title="Our Team" 
        tagline="Talented Minds, Limitless Possibilities"
        description={description}
        buttons={false}
      />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default TeamPage
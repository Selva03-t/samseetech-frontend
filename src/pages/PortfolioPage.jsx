import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const PortfolioPage = () => {
  const description = "Discover our latest projects showcasing innovative designs and robust digital solutions that have helped our clients succeed."

  return (
    <div>
            <Hero showHero={false} />

      <Hero 
        title="Our Portfolio" 
        tagline="Where Innovation Meets Execution"
        description={description}
        buttons={false}
      />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default PortfolioPage
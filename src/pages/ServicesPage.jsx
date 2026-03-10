import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Contact from '../components/Contact'

const ServicesPage = () => {
  const description = "Explore our comprehensive range of digital services designed to elevate your online presence and drive growth for your business."

  return (
    <div>
            <Hero showHero={false} />

      <Hero 
        title="Our Services" 
        tagline="Tailored Solutions for Your Digital Needs"
        description={description}
        buttons={false}
      />
      <Services />
      <WhyUs />
      <Contact />
    </div>
  )
}

export default ServicesPage
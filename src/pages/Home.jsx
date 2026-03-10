import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import Process from '../components/Process'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = () => {
  const description = "We are a creative digital agency helping startups, small businesses, restaurants, local shops, and personal brands build powerful digital experiences. From website development to digital marketing, we transform ideas into impactful online solutions."

  return (
    <div>
      <Hero description={description} />
      <Services />
      <WhyUs />
      <Portfolio />
      <Pricing />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home
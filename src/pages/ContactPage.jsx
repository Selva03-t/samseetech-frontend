import Hero from '../components/Hero'
import Contact from '../components/Contact'
import WhyUs from '../components/WhyUs'

const ContactPage = () => {
  return (
    <div>
      <Hero showHero={false} />

      <Contact />
      <WhyUs />
    </div>
  )
}
export default ContactPage
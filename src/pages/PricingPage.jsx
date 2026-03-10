import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
import WhyUs from '../components/WhyUs'
import Contact from '../components/Contact'

const PricingPage = () => {
  const description = "Transparent and flexible pricing plans crafted for startups and small businesses. Choose the package that fits your needs and budget."

  return (
    <div>
            <Hero showHero={false} />

      <Hero 
        title="Pricing" 
        tagline="Value-Driven Plans for Growth"
        description={description}
        buttons={false}
      />
      <Pricing />
      <WhyUs />
      <Contact />
    </div>
  )
}

export default PricingPage
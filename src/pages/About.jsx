import Hero from '../components/Hero'
import Team from '../components/Team'
import Process from '../components/Process'
import WhyUs from '../components/WhyUs'

const About = () => {
  const description = "Samsee Tech Solution is a premier digital agency based in Chennai, specializing in innovative web solutions for startups and businesses. Founded in 2023, we blend creativity with cutting-edge technology to deliver exceptional results."

  return (
    <div>
      <Hero 
        title="About Samsee Tech Solution" 
        tagline="Building Tomorrow's Digital World Today"
        description={description}
        buttons={false}
      />
      <WhyUs />
      <Process />
      <Team />
    </div>
  )
}

export default About
import * as Tooltip from '@radix-ui/react-tooltip'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import ProblemSection from './sections/ProblemSection'
import HowItWorksSection from './sections/HowItWorksSection'
import FeaturesSection from './sections/FeaturesSection'
import GetStartedSection from './sections/GetStartedSection'
import PricingSection from './sections/PricingSection'
import WaitlistSection from './sections/WaitlistSection'

export default function App() {
  return (
    <Tooltip.Provider delayDuration={300}>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          <HeroSection />
          <ProblemSection />
          <HowItWorksSection />
          <FeaturesSection />
          <GetStartedSection />
          <PricingSection />
          <WaitlistSection />
        </main>
        <Footer />
      </div>
    </Tooltip.Provider>
  )
}

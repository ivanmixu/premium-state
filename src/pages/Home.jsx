import React from 'react'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import InvestmentProcess from '../components/InvestmentProcess'
import StatsSection from '../components/StatsSection'
import PortfolioSection from '../components/PortfolioSection'
import SuccessStories from '../components/SuccessStories'
import MarketInsights from '../components/MarketInsights'
import InvestmentOptions from '../components/InvestmentOptions'
import WhyChooseUs from '../components/WhyChooseUs'
import ContactSection from '../components/ContactSection'
import TeamSection from '../components/TeamSection'


function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <InvestmentProcess />
      <TeamSection/>
      <StatsSection />
      <PortfolioSection />
      <SuccessStories/>
      <MarketInsights/>
      <InvestmentOptions/>
      <WhyChooseUs/>
      <ContactSection/>
    </div>
  )
}

export default Home
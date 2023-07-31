import React from 'react'
import { HeroSection } from '../components/homepage/HeroSection'
import Empty from '../components/Empty'
import ServiceCard from '../components/homepage/ServiceCard'

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <ServiceCard/>
      <Empty/>
    </>
  )
}

export default HomePage

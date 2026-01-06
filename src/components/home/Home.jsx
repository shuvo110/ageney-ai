import React from 'react'
import HeroSection from './HeroSection'
import Trusted from './Trusted'
import HowCan from './HowCan'
import LatestWork from './LatestWork'
import Team from './Team'
import Reach from './Reach'
import Footer from '../main/Footer'

function Home() {
  return (
    <div>
      <section id="hero">
        <HeroSection />
        <Trusted />
      </section>

      <section id="how-can">
        <HowCan />
      </section>

      <section id="latest-work">
        <LatestWork />
      </section>

      <section id="team">
        <Reach />
        <Team />
      </section>


      <Footer />
    </div>
  )
}

export default Home
import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import ExperimentalProject from '@/sections/ExperimentalProject'
import HeroSection from '@/sections/HeroSection'


export default function Home() {
  return (
    <PageWrapper>
      <HeroSection/>
      <ExperimentalProject/>
      
    </PageWrapper>
  )
}

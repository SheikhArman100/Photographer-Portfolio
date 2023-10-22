import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import AestheticSection from '@/sections/AestheticSection'
import AppointmentSection from '@/sections/AppointmentSection'
import ExperimentalProject from '@/sections/ExperimentalProject'
import HeroSection from '@/sections/HeroSection'


export default function Home() {
  return (
    <PageWrapper>
      <HeroSection/>
      <ExperimentalProject/>
      <AestheticSection/>
      <AppointmentSection/>
      
    </PageWrapper>
  )
}

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import AestheticSection from '@/sections/AestheticSection'
import AppointmentSection from '@/sections/AppointmentSection'
import ContactMe from '@/sections/ContactMe'
import ExperimentalProject from '@/sections/ExperimentalProject'
import HeroSection from '@/sections/HeroSection'
import ProductPhotography from '@/sections/ProductPhotography'


export default function Home() {
  return (
    <PageWrapper>
      <HeroSection/>
      <ExperimentalProject/>
      <AestheticSection/>
      <AppointmentSection/>
      <ProductPhotography/>
      <ContactMe/>
      <Footer/>
      
    </PageWrapper>
  )
}

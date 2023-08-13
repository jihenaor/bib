import './App.css'
import BlogsSection from './adapters/ui/components/Blogs'
import DealSection from './adapters/ui/components/Deal'
import FeaturedSection from './adapters/ui/components/Featured'
import FooterSection from './adapters/ui/components/Footer'
import Header from './adapters/ui/components/Header'
import HomeSection from './adapters/ui/components/HomeSection'
import IconsSection from './adapters/ui/components/IconsSection'
import LoaderSection from './adapters/ui/components/Loader'
import LoginForm from './adapters/ui/components/LoginForm'
import Navbar from './adapters/ui/components/Navbar'
import NewsletterSection from './adapters/ui/components/Newsletter'
import ReviewsSection from './adapters/ui/components/Reviews'
import ArrivalsSection from './adapters/ui/components/arrivals'

function App() {

  return (
    <>
      <Header />
      <Navbar />
      <LoginForm />
      <HomeSection />
      <IconsSection />
      <FeaturedSection />
      <NewsletterSection />
      <ArrivalsSection />
      <DealSection />
      <ReviewsSection />
      <BlogsSection />
      <FooterSection />
    {/* <LoaderSection /> */}
    </>
  )
}

export default App

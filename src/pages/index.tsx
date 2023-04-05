import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     
     <Header />
      <Features />
      <Pricing />
      <Footer />
      
    </>
  )
}

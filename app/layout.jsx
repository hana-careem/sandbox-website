import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { HeroCtaProvider } from '../components/ui/HeroCtaContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata = {
  title: 'Sandbox | APIIT',
  description: 'Inter-School Business Pitching Competition',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-slate-950 text-slate-300 font-sans selection:bg-[#7C3AED] selection:text-white antialiased">
        <HeroCtaProvider>
          <Navbar />
          {children}
          <Footer />
        </HeroCtaProvider>
      </body>
    </html>
  )
}

import './globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export const metadata = {
  title: 'Sandbox | APIIT',
  description: 'Inter-School Business Pitching Competition',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

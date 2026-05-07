import { Inter, Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant' 
})
const outfit = Outfit({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit' 
})

export const metadata = {
  title: 'Nihira Jewels | Exquisite Handcrafted Jewellery',
  description: 'Explore the finest collection of handcrafted jewellery at Nihira Jewels. Premium diamonds, gold, and traditional designs for every occasion.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} ${outfit.variable} font-outfit antialiased`}>
        {children}
      </body>
    </html>
  )
}

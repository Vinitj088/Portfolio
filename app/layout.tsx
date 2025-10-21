import './globals.css'
import { Caveat } from 'next/font/google'
import { SmoothScroll } from './components/SmoothScroll'
import { GeistSans } from 'geist/font/sans'

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
})

export const metadata = {
  title: 'Vinit Jain',
  description: 'Vinit Jain is a fullstack developer who loves to experiment and try new things',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${caveat.variable} ${GeistSans.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}

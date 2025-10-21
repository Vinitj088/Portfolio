import './globals.css'
import { Caveat } from 'next/font/google'
import { SmoothScroll } from './components/SmoothScroll'
import { GeistSans } from 'geist/font/sans'

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
})

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

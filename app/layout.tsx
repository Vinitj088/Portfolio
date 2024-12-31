import './globals.css'
import { Caveat } from 'next/font/google'

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
    <html lang="en" className={caveat.variable}>
      <body>{children}</body>
    </html>
  )
}

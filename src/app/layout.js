import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Ducehost',
  description: 'Helping businesses make their online dream come true',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Outfit-Medium.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Outfit-Regular.woff2"
          as="font"
          type="font/woff2"
        />
      </head>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  )
}

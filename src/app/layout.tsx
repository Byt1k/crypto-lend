import type { Metadata } from 'next'
import '../styles/globals.scss'
import { Open_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const OpenSans = Open_Sans({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>
        {children}
      </body>
    </html>
  )
}

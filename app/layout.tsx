import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cricket Scoreboard',
  description: 'Live cricket match scores and statistics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

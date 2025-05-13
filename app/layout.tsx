import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Email Templates Creator',
  description: 'Email Templates Creator',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BBeezHive - AI Agents & Marketplace',
  description: 'BBeezHive: Dual-user partnership platform with AI agents, marketplace, and Ghost-Fi security.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-void-black text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

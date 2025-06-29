import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Helixar - AI-Powered Content Analysis & Optimization',
  description: 'Transform your content strategy with Helixar\'s intelligent AI analysis. Get actionable insights, optimize for virality, and create content that resonates with your audience.',
  keywords: 'AI content analysis, content optimization, viral content, content strategy, AI marketing',
  authors: [{ name: 'Helixar Team' }],
  creator: 'Helixar',
  publisher: 'Helixar',
  robots: 'index, follow',
  openGraph: {
    title: 'Helixar - AI-Powered Content Analysis & Optimization',
    description: 'Transform your content strategy with Helixar\'s intelligent AI analysis. Get actionable insights, optimize for virality, and create content that resonates with your audience.',
    url: 'https://helixar.com',
    siteName: 'Helixar',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Helixar - AI Content Analysis Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helixar - AI-Powered Content Analysis & Optimization',
    description: 'Transform your content strategy with Helixar\'s intelligent AI analysis.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0D0D0D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/auth'
import { ToastProvider } from '@/lib/toast'
import Script from 'next/script'
import ClientLayout from './ClientLayout'

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

// Google Analytics configuration
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Skip to main content link for accessibility */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .skip-link {
              position: absolute;
              top: -40px;
              left: 6px;
              background: #000;
              color: white;
              padding: 8px;
              text-decoration: none;
              z-index: 1000;
              border-radius: 4px;
            }
            .skip-link:focus {
              top: 6px;
            }
          `
        }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Google Analytics - only load if consent given */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}

        <AuthProvider>
          <ToastProvider>
            <ClientLayout>
              <main id="main-content" tabIndex={-1}>
                {children}
              </main>
            </ClientLayout>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  )
} 
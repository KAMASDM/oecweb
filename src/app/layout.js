// src/app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OEC India - Your Trusted Partner for World-Class Education Abroad',
  description: 'Join 2,000+ students who have successfully started their international education journey with India\'s most trusted overseas education consultant.',
  keywords: ['study abroad', 'overseas education', 'international universities', 'student visa', 'education consultant'],
  authors: [{ name: 'OEC India' }],
  creator: 'OEC India',
  publisher: 'OEC India',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://oecindia.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'OEC India - Your Trusted Partner for World-Class Education Abroad',
    description: 'Join 2,000+ students who have successfully started their international education journey with India\'s most trusted overseas education consultant.',
    url: 'https://oecindia.com',
    siteName: 'OEC India',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OEC India - Study Abroad Consultant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OEC India - Your Trusted Partner for World-Class Education Abroad',
    description: 'Join 2,000+ students who have successfully started their international education journey.',
    images: ['/og-image.jpg'],
    creator: '@oecindia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
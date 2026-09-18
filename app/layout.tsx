import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://savannahlevel.com'),
  title:
    'Savannah Level | TV Mounting & Appliance Installation in Savannah, GA',
  description:
    'Savannah Level is a fully licensed & insured home services company serving Savannah, GA. Expert TV mounting, appliance installation, furniture assembly & more. Free estimates.',
  keywords: [
    'TV mounting Savannah GA',
    'appliance installation Savannah',
    'furniture assembly Savannah',
    'home services Savannah GA',
    'security camera installation',
    'handyman Savannah',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Savannah Level | Home Services in Savannah, GA',
    description:
      'Fully licensed & insured. TV mounting, appliance installation, furniture assembly & more. Serving Savannah, Georgetown, Pooler & surrounding areas.',
    type: 'website',
    locale: 'en_US',
    images: ['/images/savannah-hero.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#16233a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${archivo.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

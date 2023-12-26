import clsx from 'clsx'
import type { Metadata } from 'next'
import { Bebas_Neue, Montserrat } from 'next/font/google'
import { Header } from '~/components/Header'
import '~/styles/globals.css'
import '~/styles/reset.css'

export const metadata: Metadata = {
  title: 'Dresan — Frontend developer',
  description: 'Web personal donde puedes descubrir mis habilidades, proyectos y recursos sobre desarrollo web. Explora mi trabajo y contáctame si tienes un proyecto en mente.',
  metadataBase: new URL('https://dresan.me'),
  authors: [{ name: 'Javier Andres - Dresan' }],
  creator: 'Javier Andres - Dresan',
  keywords: [
    'Dresan',
    'Desarrollador frontend',
    'Portafolio web',
    'Desarrollo web',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Nextjs',
    'Web personal'
  ],
}

const bebasNeue = Bebas_Neue({
  variable: '--bebas-neue-font',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={clsx(
        bebasNeue.variable,
        montserrat.className,
      )}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

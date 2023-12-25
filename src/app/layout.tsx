import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { clsx } from 'clsx'
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

const moriFont = localFont({
  display: 'swap',
  src: [
    {
      path: '../assets/fonts/Mori/PPMori-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Mori/PPMori-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang='es'>
      <body className={moriFont.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

import { Bebas_Neue, Montserrat } from 'next/font/google'
import clsx from 'clsx'
import { Header } from '~/components/Header'
import { Toast } from '~/components/Toast'
import '~/styles/globals.css'
import '~/styles/reset.css'

export const metadata = {
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
        <div className='__next'>
          <Header />
          <main>
            {children}
          </main>
        </div>

        <div id='portal-container'>
          <Toast />
        </div>
      </body>
    </html>
  )
}

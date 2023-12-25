'use client'

import { useTheme } from 'next-themes'
import clsx from 'clsx'
import { useHasMounted } from '~/hooks/use-has-mounted'
import { FadeIn } from '~/components/FadeIn'
import styles from './ThemeSwitcher.module.css'

export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const isMounted = useHasMounted()

  const isLight = resolvedTheme === 'light'
  const oppositeTheme = isLight ? 'dark' : 'light'
  const oppositeThemeText = isLight ? 'oscuro' : 'claro'

  return (
    <button
      className={styles.themeToggle}
      title={`Cambiar a modo ${isMounted && oppositeThemeText}`}
      type='button'
      onClick={() => setTheme(oppositeTheme)}
    >
      {
        isMounted && (
          <FadeIn>
            <svg
              className={clsx(
                styles.sunAndMoon,
                !isLight && styles.darkMode
              )}
              aria-hidden='true'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <mask className={styles.moon} id='moon-mask'>
                <rect
                  width='100%'
                  height='100%'
                  fill='white'
                  x='0'
                  y='0'
                />
                <circle
                  fill='black'
                  cx='24'
                  cy='10'
                  r='6'
                />
              </mask>
              <circle
                className={styles.sun}
                cx='12'
                cy='12'
                r='6'
                mask='url(#moon-mask)'
                fill='currentColor'
              />
              <g className={styles.sunBeams} stroke='currentColor'>
                <line x1='12' y1='1' x2='12' y2='3' />
                <line x1='12' y1='21' x2='12' y2='23' />
                <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
                <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
                <line x1='1' y1='12' x2='3' y2='12' />
                <line x1='21' y1='12' x2='23' y2='12' />
                <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
                <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
              </g>
            </svg>
          </FadeIn>
        )
      }
    </button>
  )
}

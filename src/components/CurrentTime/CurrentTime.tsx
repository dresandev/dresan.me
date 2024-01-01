'use client'

import { useEffect, useState } from 'react'
import { useHasMounted } from '~/hooks/use-has-mounted'
import { getCurrentTime } from './CurrentTime.helpers'
import { FadeIn } from '~/components/FadeIn'

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime())
  const isMounted = useHasMounted()

  useEffect(() => {
    setInterval(
      () => setCurrentTime(getCurrentTime()),
      1000
    )
  }, [])

  return (
    <>
      {
        isMounted && (
          <FadeIn>{currentTime}</FadeIn>
        )
      }
    </>
  )
}

import { useEffect, useState } from 'react'

export function useHasMounted() {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])

  return mounted
}

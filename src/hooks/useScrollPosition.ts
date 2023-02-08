import { useEffect, useState } from 'react'
import { hxthrottle } from '@/utils'

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = hxthrottle(() => {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return { scrollX, scrollY }
}

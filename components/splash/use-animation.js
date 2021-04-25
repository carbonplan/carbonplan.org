import { useState, useEffect } from 'react'

const useAnimation = ({ duration = 4000, delay = 0 } = {}) => {
  const [repeating, setRepeating] = useState(false)
  const [entered, setEntered] = useState(false)
  const [tick, setTick] = useState(null)

  const mouseEnter = () => {
    setEntered(true)
  }

  const mouseLeave = () => {
    setEntered(false)
    if (tick) {
      setRepeating(false)
      clearInterval(tick)
      const interval = setInterval(
        () => setRepeating((prev) => !prev),
        duration
      )
      setTick(interval)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setRepeating(true)
      const interval = setInterval(() => {
        setRepeating((prev) => !prev)
      }, duration)
      setTick(interval)
      return () => {
        clearInterval(interval)
      }
    }, delay)
  }, [])

  return {
    playState: repeating || entered,
    mouseEnter: mouseEnter,
    mouseLeave: mouseLeave,
  }
}

export default useAnimation

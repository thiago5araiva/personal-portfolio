import { useEffect, useRef } from 'react'
import p5 from 'p5'
import { setup } from './setup'

export default function OrbitContent() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    if (typeof window !== 'undefined') {
      const instance = new p5(setup, ref.current)
      return () => instance.remove()
    }
  }, [])
  return (
    <div
      className="flex justify-center w-full"
      id="sand-simulation"
      ref={ref}
    />
  )
}

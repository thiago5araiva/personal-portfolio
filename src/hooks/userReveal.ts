import { useCallback, useEffect, useRef, useState } from 'react'

export default function useReveal(threshold = 0.15) {
    const [visible, setVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const handleIntersect = () => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    obs.unobserve(el)
                }
            },
            { threshold }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }
    useEffect(handleIntersect, [threshold])

    return { ref, visible }
}

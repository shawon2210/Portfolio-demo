import { type ReactNode, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  void activeTransition
  void inactiveTransition
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return
      const { top, left, width, height } = ref.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2
      const distX = Math.abs(e.clientX - centerX)
      const distY = Math.abs(e.clientY - centerY)

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setPosition({
          x: (e.clientX - centerX) / strength,
          y: (e.clientY - centerY) / strength,
        })
      } else {
        setPosition({ x: 0, y: 0 })
      }
    },
    [padding, strength],
  )

  const handleLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
  }, [])

  const isActive = position.x !== 0 || position.y !== 0

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: 'tween',
        ease: isActive ? [0.3, 0, 0.7, 1] : [0.6, 0, 0.4, 1],
        duration: isActive ? 0.3 : 0.6,
      }}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  )
}

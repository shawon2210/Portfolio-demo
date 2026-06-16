import { type ReactNode, type CSSProperties } from 'react'
import { motion } from 'framer-motion'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  as?: 'div' | 'nav' | 'h1' | 'h2' | 'h3' | 'p' | 'section' | 'span'
  className?: string
  style?: CSSProperties
  [key: string]: unknown
}

const MotionDiv = motion.div
const MotionNav = motion.nav
const MotionH1 = motion.h1
const MotionH2 = motion.h2
const MotionH3 = motion.h3
const MotionP = motion.p
const MotionSection = motion.section
const MotionSpan = motion.span

const motionMap = {
  div: MotionDiv,
  nav: MotionNav,
  h1: MotionH1,
  h2: MotionH2,
  h3: MotionH3,
  p: MotionP,
  section: MotionSection,
  span: MotionSpan,
} as const

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = '',
  style,
  ...rest
}: FadeInProps) {
  const MotionTag = motionMap[as] || MotionDiv

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

import { useRef, useMemo, useState, type CSSProperties } from 'react'
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = useMemo(() => text.split(''), [text])

  const rawProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const [progress, setProgress] = useState(0)

  useMotionValueEvent(rawProgress, 'change', (v) => setProgress(v as number))

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {chars.map((char, i) => {
        const start = i / chars.length
        const end = start + 1 / chars.length
        const opacity = progress <= start ? 0.2 : progress >= end ? 1 : 0.2 + (progress - start) / (end - start) * 0.8

        return (
          <span key={i} className="relative inline">
            <span className="invisible">{char}</span>
            <span className="absolute left-0 top-0" style={{ opacity }}>
              {char}
            </span>
          </span>
        )
      })}
    </p>
  )
}

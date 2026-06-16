import { useRef, useMemo, type CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

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

  const opacities = useMemo(
    () =>
      chars.map((_, i) => {
        const start = i / chars.length
        const end = start + 1 / chars.length
        return useTransform(scrollYProgress, [0, start, end, 1], [0.2, 0.2, 1, 1])
      }),
    [chars, scrollYProgress],
  )

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {chars.map((char, i) => (
        <span key={i} className="relative inline">
          <span className="invisible">{char}</span>
            <motion.span
              className="absolute left-0 top-0"
              style={{ opacity: opacities[i] }}
            >
              {char}
            </motion.span>
        </span>
      ))}
    </p>
  )
}

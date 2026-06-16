import { useRef, useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

const ALL_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

const ROW1 = ALL_IMAGES.slice(0, 11)
const ROW2 = ALL_IMAGES.slice(11)

function MarqueeRow({ images, direction }: { images: string[]; direction: 'right' | 'left' }) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  const tripled = [...images, ...images, ...images]

  const handleScroll = useCallback(() => {
    if (!ref.current) return
    const sectionTop = ref.current.offsetTop
    const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
    setOffset(scrollOffset)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const x =
    direction === 'right'
      ? offset - 200
      : -(offset - 200)

  return (
    <div ref={ref} className="flex gap-2 sm:gap-3">
      <motion.div
        className="flex gap-2 sm:gap-3"
        style={{ x, willChange: 'transform' }}
      >
        {tripled.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="h-[140px] w-[220px] rounded-xl object-cover sm:h-[200px] sm:w-[320px] md:h-[260px] md:w-[400px]"
          />
        ))}
      </motion.div>
    </div>
  )
}

export default function MarqueeSection() {
  return (
    <section className="bg-[#0C0C0C] pt-16 pb-6 sm:pt-28 sm:pb-8 md:pt-36 md:pb-10">
      <div className="flex flex-col gap-2 sm:gap-3">
        <MarqueeRow images={ROW1} direction="right" />
        <MarqueeRow images={ROW2} direction="left" />
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import AnimatedText from '../components/AnimatedText'

const ABOUT_TEXT =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"

const corners = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    alt: 'Moon icon',
    className: 'absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[80px] sm:w-[140px] md:w-[200px]',
    delay: 0.1,
    x: -60,
    y: 0,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    alt: '3D object',
    className: 'absolute bottom-[8%] left-[2%] sm:left-[6%] md:left-[10%] w-[70px] sm:w-[120px] md:w-[170px]',
    delay: 0.25,
    x: -60,
    y: 0,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    alt: 'Lego icon',
    className: 'absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[80px] sm:w-[140px] md:w-[200px]',
    delay: 0.15,
    x: 60,
    y: 0,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    alt: '3D group',
    className: 'absolute bottom-[8%] right-[2%] sm:right-[6%] md:right-[10%] w-[90px] sm:w-[150px] md:w-[210px]',
    delay: 0.3,
    x: 60,
    y: 0,
  },
]

export default function AboutSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-x-clip bg-[#0C0C0C] px-4 py-16 sm:px-8 sm:py-20 md:px-10">
      {corners.map(({ src, alt, className, delay, x, y }) => (
        <motion.img
          key={alt}
          src={src}
          alt={alt}
          className={className}
          initial={{ opacity: 0, x, y }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: '50px', amount: 0 }}
          transition={{ delay, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        />
      ))}

      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(2.5rem, 11vw, 10rem)' }}
      >
        About me
      </FadeIn>

      <div className="mt-6 flex flex-col items-center gap-6 sm:mt-10 sm:gap-10 md:mt-14 md:gap-14">
        <AnimatedText
          text={ABOUT_TEXT}
          className="max-w-2xl text-center font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.25rem)' }}
        />
      </div>

      <div className="mt-10 sm:mt-16 md:mt-20">
        <ContactButton />
      </div>
    </section>
  )
}

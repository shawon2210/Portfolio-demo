import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

const BASE_IMG = 'https://images.higgs.ai/?default=1&output=webp&url='

interface Project {
  num: string
  name: string
  category: string
  col1Img1: string
  col1Img2: string
  col2Img: string
}

const projects: Project[] = [
  {
    num: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1Img1: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png') + '&w=1280&q=85',
    col1Img2: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png') + '&w=1280&q=85',
    col2Img: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png') + '&w=1280&q=85',
  },
  {
    num: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1Img1: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png') + '&w=1280&q=85',
    col1Img2: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png') + '&w=1280&q=85',
    col2Img: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png') + '&w=1280&q=85',
  },
  {
    num: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1Img1: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png') + '&w=1280&q=85',
    col1Img2: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png') + '&w=1280&q=85',
    col2Img: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png') + '&w=1280&q=85',
  },
]

function ProjectCard({ project, index, totalCards }: { project: Project; index: number; totalCards: number }) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={containerRef}
      className="relative flex h-[85vh]"
    >
      <motion.div
        className="sticky top-24 md:top-32 w-full rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{
          scale,
          top: `calc(6rem + ${index * 28}px)`,
          zIndex: index + 1,
        }}
      >
        {/* Top Row */}
        <div className="mb-6 flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 0.85 }}
            >
              {project.num}
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/70 sm:text-sm">
              {project.category}
            </span>
            <span className="mt-2 text-lg font-semibold uppercase text-[#D7E2EA] sm:text-xl md:text-2xl">
              {project.name}
            </span>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom Row - Image Grid */}
        <div className="flex gap-3 sm:gap-4">
          {/* Left Column - 40% */}
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img
              src={project.col1Img1}
              alt={`${project.name} screenshot 1`}
              loading="lazy"
              className="w-full rounded-[20px] object-cover sm:rounded-[30px] md:rounded-[40px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1Img2}
              alt={`${project.name} screenshot 2`}
              loading="lazy"
              className="w-full rounded-[20px] object-cover sm:rounded-[30px] md:rounded-[40px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          {/* Right Column - 60% */}
          <div className="w-[60%]">
            <img
              src={project.col2Img}
              alt={`${project.name} screenshot 3`}
              loading="lazy"
              className="h-full w-full rounded-[20px] object-cover sm:rounded-[30px] md:rounded-[40px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]">
      <FadeIn as="h2" delay={0} y={40} className="hero-heading pt-16 text-center font-black uppercase leading-none tracking-tight sm:pt-20 md:pt-24" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Project
      </FadeIn>

      <div className="px-4 pb-20 sm:px-6 md:px-10">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  )
}

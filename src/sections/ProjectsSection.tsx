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
    col1Img1: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png') + '&w=800&q=80',
    col1Img2: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png') + '&w=800&q=80',
    col2Img: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png') + '&w=800&q=80',
  },
  {
    num: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1Img1: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png') + '&w=800&q=80',
    col1Img2: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png') + '&w=800&q=80',
    col2Img: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png') + '&w=800&q=80',
  },
  {
    num: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1Img1: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png') + '&w=800&q=80',
    col1Img2: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png') + '&w=800&q=80',
    col2Img: BASE_IMG + encodeURIComponent('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png') + '&w=800&q=80',
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
      className="relative flex min-h-[70vh] sm:h-[85vh]"
    >
      <motion.div
        className="sticky top-16 sm:top-24 md:top-32 w-full rounded-[28px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-4 sm:rounded-[40px] sm:p-6 md:rounded-[50px] md:p-8"
        style={{
          scale,
          top: `calc(4rem + ${index * 20}px)`,
          zIndex: index + 1,
        }}
      >
        {/* Top Row — stacks on mobile, horizontal on md+ */}
        <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-start sm:justify-between md:mb-6">
          <div className="flex flex-col gap-0.5">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 5.5rem)' }}
            >
              {project.num}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-[#D7E2EA]/60 sm:text-xs md:text-sm">
              {project.category}
            </span>
            <span className="mt-1 text-base font-semibold uppercase text-[#D7E2EA] sm:text-lg md:text-xl">
              {project.name}
            </span>
          </div>
          <div className="self-start sm:self-auto">
            <LiveProjectButton />
          </div>
        </div>

        {/* Image Grid — stacks on mobile (single column), 2-column on sm+ */}
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 md:gap-4">
          {/* Left column — full width on mobile, 40% on sm+ */}
          <div className="flex gap-2 sm:w-[40%] sm:flex-col sm:gap-3 md:gap-4">
            <img
              src={project.col1Img1}
              alt={`${project.name} screenshot 1`}
              loading="lazy"
              className="h-[180px] w-full rounded-[16px] object-cover sm:h-[140px] sm:rounded-[20px] md:h-[200px] md:rounded-[30px]"
            />
            <img
              src={project.col1Img2}
              alt={`${project.name} screenshot 2`}
              loading="lazy"
              className="hidden h-[200px] w-full rounded-[16px] object-cover sm:block sm:rounded-[20px] md:h-[280px] md:rounded-[30px]"
            />
          </div>
          {/* Right column — hidden on mobile (shown via col1Img2), 60% on sm+ */}
          <div className="hidden sm:block sm:w-[60%]">
            <img
              src={project.col2Img}
              alt={`${project.name} screenshot 3`}
              loading="lazy"
              className="h-full w-full rounded-[16px] object-cover sm:rounded-[20px] md:rounded-[30px]"
              style={{ minHeight: 'clamp(200px, 30vw, 420px)' }}
            />
          </div>
        </div>

        {/* Mobile-only: second image below */}
        <img
          src={project.col1Img2}
          alt={`${project.name} screenshot 2`}
          loading="lazy"
          className="mt-2 h-[180px] w-full rounded-[16px] object-cover sm:hidden"
        />
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section className="relative z-10 -mt-6 rounded-t-[30px] bg-[#0C0C0C] sm:-mt-10 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]">
      <FadeIn
        delay={0}
        y={40}
        className="hero-heading pt-12 text-center font-black uppercase leading-none tracking-tight sm:pt-20 md:pt-24"
        style={{ fontSize: 'clamp(2.5rem, 11vw, 10rem)' }}
      >
        Project
      </FadeIn>

      <div className="flex flex-col gap-6 px-3 pb-16 pt-6 sm:gap-8 sm:px-5 sm:pb-20 sm:pt-8 md:px-10 md:pt-10">
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

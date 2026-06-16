import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png'

const NAV_LINKS = ['About', 'Price', 'Projects', 'Contact']

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn as="nav" delay={0} y={-20} className="flex items-center justify-between gap-2 px-4 pt-4 sm:px-6 sm:pt-6 md:px-10 md:pt-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[10px] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-sm md:text-lg lg:text-[1.4rem]"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading mt-4 w-full whitespace-nowrap text-center text-[13vw] font-black uppercase leading-none tracking-tight sm:mt-2 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]"
        >
          Hi, i&apos;m Molla
        </FadeIn>
      </div>

      {/* Portrait */}
      <Magnet
        padding={150}
        strength={3}
        className="absolute left-1/2 z-10 -translate-x-1/2 top-[45%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <img
          src={PORTRAIT_URL}
          alt="Jack - 3D Creator"
          className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px]"
          loading="eager"
        />
      </Magnet>

      {/* Bottom Bar */}
      <div className="mt-auto flex items-end justify-between gap-4 px-4 pb-5 sm:px-6 sm:pb-7 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[140px] text-[10px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[200px] sm:text-xs md:max-w-[260px] md:text-base"
        >
          a 3d creator driven by crafting striking and unforgettable projects
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}

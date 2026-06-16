import FadeIn from '../components/FadeIn'

const services = [
  {
    num: '01',
    name: '3D Modeling',
    desc: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    num: '02',
    name: 'Rendering',
    desc: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    num: '03',
    name: 'Motion Design',
    desc: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    num: '04',
    name: 'Branding',
    desc: 'Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.',
  },
  {
    num: '05',
    name: 'Web Design',
    desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
]

export default function ServicesSection() {
  return (
    <section className="rounded-t-[30px] bg-white px-4 py-14 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <h2
        className="mb-10 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(2.5rem, 11vw, 10rem)' }}
      >
        Services
      </h2>

      <div className="mx-auto flex max-w-5xl flex-col">
        {services.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.08}
            y={16}
            as="div"
            className="border-b border-[rgba(12,12,12,0.12)] py-6 first:border-t sm:py-8 md:py-10"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 md:gap-10">
              <span
                className="font-black text-[#0C0C0C] leading-none shrink-0"
                style={{ fontSize: 'clamp(2.2rem, 8vw, 5.5rem)' }}
              >
                {service.num}
              </span>
              <div className="flex flex-col gap-1.5">
                <span
                  className="font-semibold uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.95rem, 2vw, 1.8rem)' }}
                >
                  {service.name}
                </span>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]/55"
                  style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)' }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function ContactButton() {
  return (
    <motion.button
      className="rounded-full px-5 py-2 text-[10px] font-medium uppercase tracking-widest text-white outline outline-2 outline-white outline-offset-[-3px] transition-all duration-200 sm:px-8 sm:py-3 sm:text-xs md:px-10 md:py-3.5 md:text-sm lg:px-12 lg:py-4 lg:text-base"
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Contact Me
    </motion.button>
  )
}

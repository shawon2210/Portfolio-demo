import { type ReactNode } from 'react'

interface LiveProjectButtonProps {
  children?: ReactNode
}

export default function LiveProjectButton({ children = 'Live Project' }: LiveProjectButtonProps) {
  return (
    <button className="rounded-full border-2 border-[#D7E2EA]/40 px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-[#D7E2EA] transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/70 active:scale-95 sm:px-6 sm:py-2.5 sm:text-xs md:px-8 md:py-3 md:text-sm">
      {children}
    </button>
  )
}

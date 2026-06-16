'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import ContactModal from '@/components/ui/ContactModal'

export default function ContactEmailButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2 border border-brand-pink px-6 py-3 bg-brand-pink/10 hover:bg-brand-pink hover:text-white transition-colors text-brand-pink"
        style={{ boxShadow: "4px 4px 0px rgba(255,133,179,0.25)" }}
      >
        <Mail size={16} strokeWidth={2.5} />
        <span className="text-xs font-semibold tracking-[0.08em]">
          이메일 보내기
        </span>
      </button>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

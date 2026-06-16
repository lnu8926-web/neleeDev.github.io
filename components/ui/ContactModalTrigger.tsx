'use client'

import { useState, type ReactNode } from 'react'
import ContactModal from '@/components/ui/ContactModal'

interface ContactModalTriggerProps {
  children: (openModal: () => void) => ReactNode
}

export default function ContactModalTrigger({ children }: ContactModalTriggerProps) {
  const [open, setOpen] = useState(false)
  return (
    <>
      {children(() => setOpen(true))}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

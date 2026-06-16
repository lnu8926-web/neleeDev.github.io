'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import ContactModal from '@/components/ui/ContactModal'

export default function HeroActions() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center">
        <a href="#projects">
          <Button variant="primary" size="lg" className="min-w-40">
            프로젝트 보기
          </Button>
        </a>
        <Button
          variant="ghost"
          size="lg"
          className="min-w-40"
          onClick={() => setContactOpen(true)}
        >
          연락하기
        </Button>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}

'use client'

import Button from '@/components/ui/Button'
import ContactModalTrigger from '@/components/ui/ContactModalTrigger'

export default function HeroActions() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <a href="#projects">
        <Button variant="primary" size="lg" className="min-w-40">
          프로젝트 보기
        </Button>
      </a>
      <ContactModalTrigger>
        {(openModal) => (
          <Button variant="ghost" size="lg" className="min-w-40" onClick={openModal}>
            연락하기
          </Button>
        )}
      </ContactModalTrigger>
    </div>
  )
}

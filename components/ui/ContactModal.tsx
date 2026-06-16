'use client'

import { useActionState, useEffect, useRef } from 'react'
import { X, Send, Mail } from 'lucide-react'
import { toast } from 'sonner'
import Button from '@/components/ui/Button'
import { sendContactEmail, type ContactState } from '@/app/actions/contact'

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [state, formAction, isPending] = useActionState<ContactState, FormData>(
    sendContactEmail,
    null
  )
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!state) return
    if (state.success) {
      toast.success(state.message)
      formRef.current?.reset()
      onClose()
    } else {
      toast.error(state.message)
    }
  }, [state, onClose])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* panel */}
      <div className="relative w-full max-w-md border border-brand-pink/40 bg-[#0d0d0d] shadow-[0_0_40px_rgba(255,133,179,0.12)]">
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-brand-pink" />
            <span className="font-(family-name:--font-pixel) text-[10px] uppercase tracking-widest text-brand-pink">
              CONTACT.send()
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 transition-colors hover:text-white/80"
            aria-label="닫기"
          >
            <X size={16} />
          </button>
        </div>

        {/* form */}
        <form ref={formRef} action={formAction} className="flex flex-col gap-4 p-6">
          <div className="flex flex-col gap-1.5">
            <label className="font-(family-name:--font-pixel) text-[9px] uppercase tracking-widest text-white/50">
              이름
            </label>
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="홍길동"
              className="border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-brand-pink/60 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-(family-name:--font-pixel) text-[9px] uppercase tracking-widest text-white/50">
              이메일
            </label>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-brand-pink/60 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-(family-name:--font-pixel) text-[9px] uppercase tracking-widest text-white/50">
              메시지
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="안녕하세요. 입사 제의 드리고 싶습니다..."
              className="resize-none border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-brand-pink/60 transition-colors"
            />
          </div>

          <Button
            type="submit"
            variant="secondary"
            size="md"
            disabled={isPending}
            className="mt-1 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Send size={13} strokeWidth={2.5} />
            {isPending ? '전송 중...' : '메시지 보내기'}
          </Button>
        </form>
      </div>
    </div>
  )
}

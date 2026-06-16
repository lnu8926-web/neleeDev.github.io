'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactState = {
  success: boolean
  message: string
} | null

export async function sendContactEmail(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  if (!name || !email || !message) {
    return { success: false, message: '모든 항목을 입력해주세요.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: '유효한 이메일 주소를 입력해주세요.' }
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'lnu8926@gmail.com',
      replyTo: email,
      subject: `[포트폴리오] ${name}님의 연락`,
      text: `이름: ${name}\n이메일: ${email}\n\n${message}`,
    })

    return { success: true, message: '메시지가 전송되었습니다. 빠른 시일 내에 답변드릴게요!' }
  } catch {
    return { success: false, message: '전송에 실패했습니다. 잠시 후 다시 시도해주세요.' }
  }
}

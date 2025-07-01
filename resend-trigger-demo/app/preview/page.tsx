"use client"

import { useEffect, useState } from "react"
import DailyGenAIQuiz from "@/emails/daily-gen-ai-quiz"
import { render, renderAsync } from "@react-email/render"

export default function PreviewPage() {
  const [emailHtml, setEmailHtml] = useState("")

  useEffect(() => {
    const fetchHtml = async () => {
      // Render the email template to HTML on the client side
      const html = await render(DailyGenAIQuiz())
      setEmailHtml(html)
    }
    fetchHtml()
  }, [])

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Email Preview</h1>
        <p className="text-gray-500">This is how your email will look when sent</p>
      </div>

      <div className="border rounded-lg p-4 bg-white">
        <iframe srcDoc={emailHtml} className="w-full h-[800px] border-0" title="Email Preview" />
      </div>
    </div>
  )
}


"use server"

import { Resend } from "resend"
import DailyGenAIQuiz from "@/emails/daily-gen-ai-quiz"
import { renderAsync } from "@react-email/render"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendQuizEmail(formData: FormData) {
  const email = formData.get("email") as string

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please provide a valid email address",
    }
  }

  try {
    // Render the React component to HTML
    const html = await renderAsync(DailyGenAIQuiz())

    // Send the email with the rendered HTML
    const data = await resend.emails.send({
      from: "Reykan <onboarding@resend.dev>",
      to: [email],
      subject: "Your Requested Content",
      html: html,
    })

    return {
      success: true,
      message: "Email sent successfully!",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}


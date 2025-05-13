import { NextResponse } from "next/server"
import { Resend } from "resend"
import DailyGenAIQuiz from "@/emails/daily-gen-ai-quiz"
// import { renderAsync } from "@react-email/render"

const resend = new Resend(process.env.RESEND_API_KEY)

// Define a custom type for the response
interface CreateEmailResponse {
  id: string;
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Render the React component to HTML
    // const html = await renderAsync(DailyGenAIQuiz())

    // Send the email with the rendered HTML
    const data = await resend.emails.send({
      from: "Reykan <onboarding@resend.dev>",
      to: [email],
      subject: "Your Requested Content",
      react: DailyGenAIQuiz(),
    }) as unknown as CreateEmailResponse

    return NextResponse.json({ id: data.id })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}


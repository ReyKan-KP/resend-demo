import { wait } from "@trigger.dev/sdk/v3";
import { retry } from "@trigger.dev/sdk/v3";
import { task } from "@trigger.dev/sdk/v3";
import { Resend } from "resend";
import DailyGenAIQuiz from "@/emails/daily-gen-ai-quiz";

// Initialize Resend client with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Define payload type with user data and interval information
type EmailSequencePayload = {
  userId: string;
  email: string;
  name: string;
  intervalMinutes?: number; // Optional parameter with default value
};

// Create the email sequence task
export const emailSequence = task({
  id: "email-sequence",
  run: async (payload: EmailSequencePayload) => {
    const { email, name, intervalMinutes = 1 } = payload;
    
    // Send the first email immediately
    const firstEmail = await sendEmail(email);
    console.log(`First Daily Gen AI Quiz email sent to ${email} - ID: ${firstEmail?.id}`);
    
    // Wait for the specified interval
    await wait.for({ minutes: intervalMinutes });
    console.log(`Waited for ${intervalMinutes} minutes`);
    
    // Send the second email
    const secondEmail = await sendEmail(email);
    console.log(`Second Daily Gen AI Quiz email sent to ${email} - ID: ${secondEmail?.id}`);
    
    return {
      firstEmailId: firstEmail?.id,
      secondEmailId: secondEmail?.id,
      recipient: email
    };
  },
});

// Helper function to send email using Resend
async function sendEmail(to: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject: "🚀 Your Daily Gen AI Quiz is Ready!",
      react: DailyGenAIQuiz(),
    });
    
    if (error) {
      console.error("Failed to send email:", error);
      throw error;
    }
    
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

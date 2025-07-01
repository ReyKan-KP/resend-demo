"use server";

import { emailSequence } from "@/trigger/email-trigger";
import { configure } from "@trigger.dev/sdk/v3";

configure({
  secretKey: process.env.TRIGGER_SECRET_KEY,
});

export async function triggerEmailSequence(minutes: number) {
  try {
    // User data for email sending
    const userData = {
      userId: "user-123",
      email: "kanishaka@buildfastwithai.com",
      name: "Kanishaka",
      intervalMinutes: minutes
    };
    
    // Call the email sequence task with the interval
    await emailSequence.trigger(userData);
    
    return { success: true };
  } catch (error) {
    console.error("Failed to trigger email sequence:", error);
    throw new Error("Failed to trigger email sequence");
  }
} 
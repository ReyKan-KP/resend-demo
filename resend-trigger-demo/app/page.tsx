"use client"

import { useState } from "react"
import { sendQuizEmail } from "@/actions/send-email"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await sendQuizEmail(formData)
      setResult(response)
    } catch (error) {
      setResult({
        success: false,
        message: "An unexpected error occurred",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Send Email</CardTitle>
          <CardDescription>Send content to your email</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input id="email" name="email" type="email" placeholder="your@email.com" required className="w-full" />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Email"}
            </Button>
          </form>

          {result && (
            <Alert
              className={`mt-4 ${result.success ? "bg-green-50 text-green-800 border-green-200" : "bg-red-50 text-red-800 border-red-200"}`}
            >
              {result.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
              <AlertTitle>{result.success ? "Success!" : "Error"}</AlertTitle>
              <AlertDescription>{result.message}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-gray-500">
          Check out the &nbsp;
          <Link href="/preview" className="underline">
            preview
          </Link>
          &nbsp; page to see the email
        </CardFooter>
      </Card>
    </main>
  )
}


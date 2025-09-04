import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Log the contact form submission (in production, you'd save to database or send email)
    console.log("Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to user

    // For now, we'll simulate a successful submission
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I will get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 })
  }
}

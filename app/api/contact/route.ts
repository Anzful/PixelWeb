import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, budget, message } = body

    // Validate required fields
    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { error: 'გთხოვთ შეავსოთ ყველა სავალდებულო ველი' },
        { status: 400 }
      )
    }

    // For now, we'll use Resend API (you'll need to add your API key)
    // Install: npm install resend
    // Get free API key from: https://resend.com/api-keys
    
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const YOUR_EMAIL = process.env.CONTACT_EMAIL || 'info@pixelweb.ge'

    if (!RESEND_API_KEY) {
      // Fallback: Log to console if no API key (development mode)
      console.log('📧 Contact Form Submission:', {
        name,
        email,
        phone,
        company,
        service,
        budget,
        message,
        timestamp: new Date().toISOString()
      })
      
      return NextResponse.json({ 
        success: true, 
        message: 'შეტყობინება მიღებულია! (Dev Mode)' 
      })
    }

    // Send email via Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'PixelWeb.ge <onboarding@resend.dev>', // You'll change this to your domain
        to: [YOUR_EMAIL],
        subject: `ახალი შეკითხვა: ${name} - ${service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">ახალი შეტყობინება PixelWeb.ge-დან</h2>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>სახელი:</strong> ${name}</p>
              <p><strong>ელ-ფოსტა:</strong> ${email}</p>
              ${phone ? `<p><strong>ტელეფონი:</strong> ${phone}</p>` : ''}
              ${company ? `<p><strong>კომპანია:</strong> ${company}</p>` : ''}
              <p><strong>სერვისი:</strong> ${service}</p>
              ${budget ? `<p><strong>ბიუჯეტი:</strong> ${budget}</p>` : ''}
            </div>
            
            <div style="margin: 20px 0;">
              <h3>შეტყობინება:</h3>
              <p style="white-space: pre-wrap; background: #f9fafb; padding: 15px; border-left: 4px solid #2563eb;">${message}</p>
            </div>
            
            <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
              გაგზავნილია: ${new Date().toLocaleString('ka-GE', { timeZone: 'Asia/Tbilisi' })}
            </p>
          </div>
        `,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json()
      console.error('Resend API Error:', {
        status: emailResponse.status,
        statusText: emailResponse.statusText,
        error: errorData
      })
      throw new Error(`Email sending failed: ${JSON.stringify(errorData)}`)
    }

    return NextResponse.json({ 
      success: true, 
      message: 'შეტყობინება წარმატებით გაიგზავნა!' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'დაფიქსირდა შეცდომა. გთხოვთ სცადოთ თავიდან.' },
      { status: 500 }
    )
  }
}


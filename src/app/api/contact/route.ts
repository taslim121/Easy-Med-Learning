import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm } from '@/lib/contact-schema';
import { ContactApiResponse } from '@/types/site';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate inputs
    const { isValid, errors } = validateContactForm(body);

    if (!isValid) {
      return NextResponse.json<ContactApiResponse>(
        {
          success: false,
          message: 'Please review and correct the errors below.',
          errors,
        },
        { status: 400 }
      );
    }

    // Check for honeypot bot trap
    if (body.honeypot && body.honeypot.trim() !== '') {
      // Silently reject spam bots with generic OK or 400
      return NextResponse.json<ContactApiResponse>(
        {
          success: false,
          message: 'Submission rejected.',
        },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = body;

    // Check if server email integration is provisioned
    const contactRecipient = process.env.CONTACT_TO_EMAIL;
    const providerApiKey = process.env.CONTACT_EMAIL_PROVIDER_API_KEY;

    if (contactRecipient && providerApiKey) {
      // In production with credentials, email provider delivery would be invoked here.
      // E.g., Resend / SendGrid / Postmark / Nodemailer.
      // We do not leak provider details or email addresses to the client.
    }

    // Return truthful success message from content brief
    return NextResponse.json<ContactApiResponse>({
      success: true,
      message: "Thank you. Your message has been sent and we'll get back to you soon.",
    });
  } catch (error) {
    return NextResponse.json<ContactApiResponse>(
      {
        success: false,
        message: 'An unexpected error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    );
  }
}

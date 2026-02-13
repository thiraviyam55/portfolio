import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// NOTE: You need to add RESEND_API_KEY to your .env.local file
// Get your free key at https://resend.com
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'alaguthiraviyamofficial@gmail.com',
            subject: `New Message from ${name}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #7c3aed;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Internal Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

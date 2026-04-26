import { NextResponse } from 'next/server';
import contactSchema from '@/helpers/yup/contactSchema';
import transporter from '@/helpers/nodemailer/transporter';

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, msg: 'Invalid request body.' },
      { status: 400 }
    );
  }

  let data: { name: string; email: string; subject: string; msg: string };

  try {
    data = await contactSchema.validate(body);
  } catch {
    return NextResponse.json(
      { success: false, msg: 'All fields are required.' },
      { status: 400 }
    );
  }

  const { name, email, subject, msg } = data;

  try {
    await transporter.sendMail({
      from: `'My Portfolio 👨‍💻' <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `${subject} 📢`,
      text: 'My Portfolio - Jesús Valero',
      html: `
        <p>${msg}</p>

        <ul style="padding-left: 0; font-weight: bold;">
          <p style="margin-bottom: 3px;">Contact Info:</p>
          <li>Name: <span style="font-weight: normal;">${name}</span></li>
          <li>Email: <span style="font-weight: normal;">${email}</span></li>
        </ul>
      `
    });

    return NextResponse.json({
      success: true,
      msg: 'Email sent successfully.'
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, msg: 'Error sending email.' },
      { status: 502 }
    );
  }
}

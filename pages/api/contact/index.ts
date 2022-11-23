import { NextApiRequest, NextApiResponse } from 'next';
import validate from '@/server/middleware/validate';
import contactSchema from '@/helpers/yup/contactSchema';
import transporter from '@/helpers/nodemailer/transporter';

type Data = {
  success?: boolean;
  msg: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      const { name, email, subject, msg } = req.body;

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

        return res
          .status(200)
          .json({ success: true, msg: 'Email sent successfully.' });
      } catch (error) {
        console.log(error);
        return res
          .status(502)
          .json({ success: false, msg: 'Error sending email.' });
      }

    default:
      res.status(500).json({ msg: 'Invalid request type' });
  }
};

export default validate(contactSchema, handler);

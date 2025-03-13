import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USERNAME, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your app password or actual password (less secure)
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USERNAME, // Send to yourself
      subject: `Portfolio Contact Form Submission from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}

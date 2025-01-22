//e-mail

import nodemailer from 'nodemailer';

export async function post(req, res) {
  const { name, email, message } = req.body;

  // Create a transporter for the email
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Or any email service you prefer
    auth: {
      user: process.env.EMAIL_USER,  // Your email address
      pass: process.env.EMAIL_PASS,  // Your email password or app-specific password
    },
  });

  // Setup email options
  const mailOptions = {
    from: email,
    to: 'youremail@example.com',  // The email you want to receive the form submission at
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
}

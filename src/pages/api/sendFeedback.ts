import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    let transporter = nodemailer.createTransport({
      host: "in-v3.mailjet.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILJET_USER,
        pass: process.env.MAILJET_PASS,
      },
    });

    const { name, email, companyName, message } = req.body;

    const mailOptions = {
      from: '"Feedback form" <katya.mikhailova.98@gmail.com>',
      to: "katya.mikhailova.98@gmail.com",
      subject: "New Feedback Form Message",
      text: `Name: ${name}\nEmail: ${email}\Company: ${companyName}\Message: ${message}`,
      html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Company:</b> ${companyName}<br><b>Message:</b> ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res
          .status(500)
          .json({ success: false, error: "Failed to send email" });
      } else {
        console.log("Message sent: " + info.response);
        return res.status(200).json({ success: true });
      }
    });
  } else {
    res.status(405).json({ error: "Method not supported" });
  }
};

export default sendEmail;

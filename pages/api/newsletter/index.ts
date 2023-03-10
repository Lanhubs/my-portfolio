import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import {configs} from "../../../Components/Utils/config"
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get the user's email and message from the request body
  if (req.method === "POST") {
    const { sender, message,  email } = req.body;

    // Create a new SMTP transporter using your Gmail account credentials
    const transporter = await nodemailer.createTransport({
      service:configs.EMAIL_HOST,
      secure: true,
      port: 587,

      auth: {
        user: configs.EMAIL_USERNAME,
        pass: configs.EMAIL_PASSWORD,
      },
    });

    // Set up the email message
    const mailOptions = {
      from: email,
      to: "muhammedolanrewaju56@gmail.com",
      subject: "Newsletter from my portfolio:",
      text: `\t${message}`,
    };

    try {
      // Send the email
      const sentMail = await transporter.sendMail(mailOptions);

      // Send a success response
      if (sentMail) console.log(sentMail);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      // Send an error response
      if (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!" });
      }
    }
  }
}

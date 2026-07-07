import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  const { name, email, phone, description } = req.body;

  try {

    await resend.emails.send({
      from: "Latex Booking <onboarding@resend.dev>",
      to: "YOUR_EMAIL@gmail.com",
      subject: "New Latex Repair Booking",
      text: `
Name: ${name}

Email: ${email}

Phone: ${phone}

Description:
${description}
      `,
    });

    return res.status(200).json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
    });

  }

}
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
console.log(
  process.env.RESEND_API_KEY ? "API Key Loaded":"API Key Missing"
);
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  const { name, email, phone, description } = req.body;

  try {

    const{data, error}=await resend.emails.send({
      from: "Latex Booking <hello@chicagolatexrepair.com>",
      to: "hello@chicagolatexrepair.com",
      subject: "New Latex Repair Booking",
      text: `
Name: ${name}

Email: ${email}

Phone: ${phone}

Description:
${description}
`,
});

console.log("Resend data:", data);
console.log("Resend error:", error);

if(error){
return res.status(500).json({

  success: false,
  error,
});

}

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
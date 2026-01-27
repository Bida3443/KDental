

// import {Resend} from "resend";
// import {render} from "@react-email/render";
// import { EmailComponent } from "@/components/email-template-s";


// const resend = new Resend 
// ("re_8UymLd18_zT6nTXZo1uZTb9t84GdbKe1p");

// console.log("Resend key exists:", !!process.env.re_8UymLd18_zT6nTXZo1uZTb9t84GdbKe1p);

// export async function POST(req: Request) { 
//   const formData = await req.json();

//   const { name, email, phone, time, notes } = formData;

//   // Basic validation 
//   if (!name || !email || !phone || !time || !notes) {
//     return new Response(
//       JSON.stringify({ success: false, message: "Name and email are required" }),
//       {
//         status: 400,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );



//   }

//   console.log("Validated data:", formData);

//   return new Response(
//     JSON.stringify({ success: true }),
//     {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
// }


import { Resend } from "resend";
import { render } from "@react-email/render";
import { EmailComponent } from "@/components/email-template-s";

const resend = new Resend("re_8UymLd18_zT6nTXZo1uZTb9t84GdbKe1p");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, time, notes } = body;

    // Validation
    if (!name || !email || !phone || !time || !notes) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required",
        }),
        { status: 400 }
      );
    }

    // Render email template
    const html = await render(
      <EmailComponent
        name={name}
        email={email}
        phone={phone}
        time={time}
        notes={notes}
      />
    );

    // Send email
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "alexanderbamise@gmail.com",
      subject: "New Form Submission",
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ success: false, error }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}

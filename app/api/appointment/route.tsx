// export async function POST(req: Request) {
//   const appointmentData = await req.json();

//   console.log("Appointment received:", appointmentData);

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

import {Resend}  from "resend";
import { render } from "@react-email/render";
import { EmailComponent } from "@/components/email-template";


const resend = new Resend ("re_ZnRG56hA_LhnSWBGJN1W4kqQnWu8irWad");

console.log("Resend key exists:", !!process.env.re_8UymLd18_zT6nTXZo1uZTb9t84GdbKe1p);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, email, date, time, treatment, notes } = body;

    if (!name || !phone || !email || !date || !time || !treatment) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing required appointment details",
        }),
        { status: 400 }
      );
    }
      const html = await render(
      <EmailComponent
        name={name}
        email={email}
        phone={phone}
        date={date}
        time={time}
        treatment={treatment}
        notes= {notes}
              />
    );
    const {data,error} = await  resend.emails.send({

      from: "onboarding@resend.dev",
      to: "premiumsmiledentalclinic1@gmail.com",
      subject: "New Appointment Booking",
      html,
    });
    if (error) {
      console.log("This is the error: ", error);
      return Response.json({ error }, { status: 500 });
    }
    // return new Response(JSON.stringify({ success: true }), {
    //   status: 200,
    // });
    return Response.json(data);

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}



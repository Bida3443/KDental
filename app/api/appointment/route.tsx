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


const resend = new Resend ("re_8UymLd18_zT6nTXZo1uZTb9t84GdbKe1p");

console.log("Resend key exists:", !!process.env.re_8UymLd18_zT6nTXZo1uZTb9t84GdbKe1p);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, phone, email, date, time, treatment } = data;

    if (!name || !phone || !email || !date || !time || !treatment) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing required appointment details",
        }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Dental Clinic <onboarding@resend.dev>",
      to: "premiumsmiledentalclinic1@gmail.com",
      subject: "New Appointment Booking",
      text: "New appointment received",
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}



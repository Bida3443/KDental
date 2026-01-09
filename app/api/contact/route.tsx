// export async function POST(req: Request) {
//   return new Response(
//     JSON.stringify({ message: "Contact API is alive" }),
//     { status: 200 }
//   );
// }



// import type { NextApiRequest, NextApiResponse } from 'next'
 
// type ResponseData = {
//   message: string
// }

// export default function handler( req: NextApiRequest, res: NextApiResponse<ResponseData>) {

//     console.log('Data', req.body)
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }


// export async function POST(req: Request) {
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

// export async function POST(req: Request) {
//   const formData = await req.json();

//   console.log("Received from frontend:", formData);

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



export async function POST(req: Request) {
  const formData = await req.json();

  const { name, email } = formData;

  // Basic validation 
  if (!name || !email) {
    return new Response(
      JSON.stringify({ success: false, message: "Name and email are required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  console.log("Validated data:", formData);

  return new Response(
    JSON.stringify({ success: true }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

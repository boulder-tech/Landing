import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const emailTo = process.env.EMAIL
const emailToPass = process.env.PASS
const host = process.env.HOST

// export const post: APIRoute = async ({ request }) => {
  
//     if (request.headers.get('Content-Type') === 'application/json') {
//       const formData = await request.json()

//       const email = formData.email;
//       const message = formData.message;
//       const name = formData.name;
//       const org = formData.org;
  
//       // sendmail
//       let mailTransporter = nodemailer.createTransport({
//         host: host,
//         port: 587,
//         secure: false,
//         service: "Gmail",
//         auth: {
//           user: emailTo,
//           pass: emailToPass,
//         },
//       })
  
//       let mailDetails = message ? {
//         from: email,
//         to: emailTo,
//         subject: `${name}, from ${org}`,
//         text: message,
//       } : {
//         from: email,
//         to: emailTo,
//         subject: `${email} has joined the waitlist!`,
//       }
  
//       await new Promise((resolve, reject) => {
//         // send mail
//         mailTransporter.sendMail(mailDetails, (err, info) => {
//             if (err) {
//                 console.error(err);
//                 reject(err);
//             } else {
//                 console.log(info);
//                 resolve(info);
//             }
//         });
//     });

//       // let mailresult
//       // try {
//       //   mailresult = await mailTransporter.sendMail(mailDetails)
//       // } catch (error) {
//       //   console.log('******* Error: ', error)
//       // }
//       // console.log('Message sent: %s', mailresult?.messageId)
  
//       // return endpoint response
//       return new Response(JSON.stringify(mailDetails), {
//         status: 200,
//       })
//     }
//     return new Response(null, { status: 400 }) // if not a json request
//   }
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = req.body;
//   const id = await createItem(data);
//   res.status(200).json({ id });
  if (data === 'application/json') {
    const formData = await data.json()

    const email = formData.email;
    const message = formData.message;
    const name = formData.name;
    const org = formData.org;
    res.status(200).json({ formData });
    // // sendmail
    // let mailTransporter = nodemailer.createTransport({
    //   host: host,
    //   port: 587,
    //   secure: false,
    //   service: "Gmail",
    //   auth: {
    //     user: emailTo,
    //     pass: emailToPass,
    //   },
    // })

    // let mailDetails = message ? {
    //   from: email,
    //   to: emailTo,
    //   subject: `${name}, from ${org}`,
    //   text: message,
    // } : {
    //   from: email,
    //   to: emailTo,
    //   subject: `${email} has joined the waitlist!`,
    // }

    // await new Promise((resolve, reject) => {
    //   // send mail
    //   mailTransporter.sendMail(mailDetails, (err, info) => {
    //       if (err) {
    //           console.error(err);
    //           reject(err);
    //       } else {
    //           console.log(info);
    //           resolve(info);
    //       }
    //   });
    // )}
  }
}
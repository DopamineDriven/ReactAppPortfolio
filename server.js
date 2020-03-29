const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;
// const nodemailer = require('nodemailer');

// handling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets (production)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
};

// app.post('/api/form', (request, response) => {
//     nodemailer.createTestAccount((error, account) => {
//         const htmlEmail = `
//             <h3>Contact Details</h3>
//             <ul>
//                 <li>Name: ${request.body.name}</li>
//                 <li>Email: ${request.body.email}</li>
//             </ul>
//             <h3>Message</h3>
//             <p>${request.body.message}</p>
//         `

//         let transporter = nodemailer.createTransport({
//             host: "smtp.ethereal.email",
//             port: 587,
//             auth: {
//                 user: `${process.env.EMAIL_ADDRESS}`,
//                 pass: `${process.env.EMAIL_PASSWORD}`
//             }
//         })

//         let mailOptions = {
//             from: 'test@testaccount.com',
//             to: process.env.EMAIL_ADDRESS,
//             replyTo: 'test@testaccount.com',
//             subject: 'new message nodemailer',
//             text: request.body.message,
//             html: htmlEmail
//         }

//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 return console.log(error)
//             } 
//             console.log('message sent: %s', info.message)
//             console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
//         })
//     })
// })

// // sending errors for posts that are not nodemailer related
// app.delete('*', (request, response) => {
//     response
//         .status(404)
//         .send('Unable to locate resource')
// });

// app.post('*', (request, response) => {
//     response
//         .status(404)
//         .send('Unable to locate resource')
// });

// app.put('*', (request, response) => {
//     response
//         .status(404)
//         .send('Unable to locate resource')
// });

app.listen(PORT, () => {
    console.log(`App listening on PORT http://localhost:${PORT}`)
});

// // importing nodemail routes
// // module.exports = app => {
// //     'use strict';
// //     require('dotenv').config();
// //     const nodemailer = require('nodemailer');

// //     const transporter = nodemailer.createTransport({
// //         service: "gmail",
// //         auth: {
// //             user: `${process.env.EMAIL_ADDRESS}`,
// //             pass: `${process.env.EMAIL_PASSWORD}`
// //         }
// //     });
// //     const emailRecipient = `${process.env.EMAIL_ADDRESS}`
// //     // route to contact email recipient
// app.post('/api/form', (request, response) => {
//     const userName = request.body.name;
//     const userEmail = request.body.email;
//     const subject = request.body.subject;
//     const message = request.body.message;

//     const messageDefined = {
//         from: {
//             name: userName,
//             address: userEmail
//         },
//         to: `${emailRecipient}`,
//         subject: `Portfolio Express ~ ${subject}`,
//         text: message
//     }
//     console.log(messageDefined);
//     // using sendMail per nodemailer documentation
//     transporter.sendMail(messageDefined, (error, response) => {
//         if (!error) {
//             console.log(`response delivered: ${response}`)
//             response
//                 .status(200)
//                 .json('successfully sent')
//         }
//         else {
//             console.error(`error occurred: ${error}`)
//         }
//     })
// })
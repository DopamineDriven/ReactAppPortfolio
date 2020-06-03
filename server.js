const express = require("express");
require("dotenv").config();
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3333;
const multer = require("multer");
const upload = multer();
const cors = require("cors");
const helmet = require("helmet");
const { GoogleAuth } = require('google-auth-library');
const config = require("./oauth_config.json");


// handling data parsing
app.use(
	express.urlencoded({ extended: true }),
	cors(),
	helmet(),
	express.json()
);

// static assets (production)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}



const auth = {
	type: "oauth2",
	user: `${process.env.EMAIL_ADDRESS}`,
	clientId: `${process.env.CLIENT_ID}`,
	clientSecret: `${process.env.CLIENT_SECRET}`,
    refreshToken: `${process.env.REFRESH_TOKEN}`,
    auth_uri: "http://localhost:3333",
    redirect_uris: "http://localhost:3333/send"
};

console.log(process.env.REFRESH_TOKEN);
console.log(process.env.EMAIL_ADDRESS);

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.post("/send", upload.none(), (req, res) => {
	response = {
		name: req.body.name,
		email: req.body.email,
		message: req.body.message,
	};

	const mailOptions = {
		from: req.body.name,
		to: `${process.env.EMAIL_ADDRESS}`,
		subject: `My site contact form ${req.body.name}`,
		text: req.body.message,
		html:
			"Message from: " +
			req.body.name +
			"<br></br> Email: " +
			req.body.email +
			"<br></br> Message: " +
			req.body.message,
	};

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: auth,
	});

	transporter.sendMail(mailOptions, (err, res) => {
		if (err) {
			throw new Error(err);
		} else {
			console.log(JSON.stringify(res));
		}
	});
});

app.listen(PORT, () => {
	console.log(`App listening on PORT http://localhost:${PORT}`);
});

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

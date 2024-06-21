const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "Gmail",
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
);

//setting up email

const sendAccontActivationEmail = async ({ link, email, fName }) => {
  await transporter.sendMail({
    from: '"SocialLink" <nirajlimbu49@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Account Activation Required", // Subject line
    text: `Hello ${fName}, Please click on this link to activate your account. ${link}`, // plain text body
    html: `
            <p>
            Hello ${fName},
      
            Please click on this link to active! your Account. 
            <a href="${link}">${link}</a>
      
            Thank you,
            SocialLink
            </p>
            `, // html body
  });
};

module.exports = {
  sendAccontActivationEmail,
};

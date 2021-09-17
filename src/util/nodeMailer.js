const nodemailer = require("nodemailer");

const mailTransporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: "465",
  secure: true, // use SSL
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

module.exports = { mailTransporter };

const nodemailer = require("nodemailer");

const mailTransporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: "465",
  secure: true, // use SSL
  auth: {
    user: "auctiapp",
    pass: "epsilon@pesto",
  },
});

module.exports = { mailTransporter };

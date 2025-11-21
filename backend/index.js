// Importing Express()
// Used to create Api Easy
const port = 3000;
const express = require("express");
const app = express();
// allows frontend to communicate with Backend
const cors = require("cors");
// Import node mailer to send email from node
const nodemailer = require("nodemailer");
// Search how to send mail from node

app.get("/sendmail", function (req, res) {
  let transporter = nodemailer.createTransport({
    service: "gmail", // e.g., 'gmail', 'Outlook365'
    auth: {
      user: "sivabalanedu1@gmail.com",
      pass: "lgjr lvmd cauw gmzv",
    },
  });

  // transporter.sendmail()
  transporter.sendMail(
    {
      from: "sivabalanedu1@gmail.com",
      to: "sivabalanjobsearch@gmail.com",
      subject: "Mail from Bulkmailer",
      text: "Mail send Success",
    },
    function (error, info) {
      if (error) {
        res.send(error);
      } else {
        res.send("Success");
      }
    }
  );
});

app.listen(port, function () {
  console.log("Server Started at port " + port);
});

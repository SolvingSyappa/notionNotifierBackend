require("dotenv").config();
const express = require("express"),
  app = express(),
  port = 8080,
  cors = require("cors");

var SibApiV3Sdk = require('sib-api-v3-sdk');
const Html = require("./html");
var defaultClient = SibApiV3Sdk.ApiClient.instance;

var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.APIKEY;

app.use(express.json());
app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
  res.send({ message: "We did it!", data: process.env.SMTP });
});

app.post("/send-email", (req, res) => {
    // read data from request body

    const { emails, message } = req.body;

    // set email data as json object array to send to sendinblue
    const emailData = [];
    emails.forEach((email) => {
        emailData.push({ email: email });
    });
    
    const transactionEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = "Reminder from GDSC JIIT-128";
    sendSmtpEmail.htmlContent = Html(message);
    sendSmtpEmail.sender = {"name":"GDSC JIIT-128","email":"reminder@gdsc.jiit128.com"};
    sendSmtpEmail.replyTo = {"email":"dscjiit128@gmail.com"};
    // sendSmtpEmail.bc = {"email":"dscjiit128@gmail.com"};
    sendSmtpEmail.to = emailData;
    
    transactionEmailApi.sendTransacEmail(sendSmtpEmail).then(function(data) {
        res.send({ message: "Email sent!", data: data });
    }, function(error) {
        res.send({ message: "Email not sent!", data: error });
        console.error(error);
    });
});

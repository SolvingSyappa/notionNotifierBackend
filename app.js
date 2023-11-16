require("dotenv").config();
const express = require("express"),
  app = express(),
  port = 3001,
  cors = require("cors");

var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.APIKEY;

app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
  res.send({ message: "We did it!", data: process.env.SMTP });
});

app.post("/send-email", (req, res) => {
    // read data from request body

    const { emails, message } = req.body;
    console.log("Data: ", req.body);
    console.log("Emails: ", emails);
    console.log("Message: ", message);
    
    const transactionEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = "Hello from the Node SDK!";
    sendSmtpEmail.htmlContent = "<html><body><h1>Hi!</h1><p>My first transactional email sent using the SendinBlue SMTP interface.</p></body></html>";
    sendSmtpEmail.sender = {"name":"John Doe","email":"example@gmail.com"};
    sendSmtpEmail.to = [{"email":"sandhu.sahil2002@gmail.com"},{"email":"sandhu.sahil.apple@gmail.com"}];
    
    transactionEmailApi.sendTransacEmail(sendSmtpEmail).then(function(data) {
        res.send({ message: "Email sent!", data: data });
    }, function(error) {
        res.send({ message: "Email not sent!", data: error });
    });
});

const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");
//crerate reusable transporter object using the default SMP transport
const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, 
        auth: {
          user: process.env.USER, // Sender gmail address 
          pass: process.env.APP_PASSWORD, // App password from Gmail account
        },
});


const mailOptions = {
    from:{
        name:"FATHIMA DILEEP",
        address:process.env.USER
    },
    to:["fathimadileep2019@gmail.com"],
    subject:"Send mail using Nodemailer",
    text:"Full Stack Developer!",
    html:"<b>Full Stack Developer!</b>",
    attachments:[
     {
        filename: 'IMG.jpeg',
        path: path.join(__dirname,'IMG.jpeg'),
        contentType: 'image/jpeg',
     }
    ]
}

const sendMail = async (transporter,mailOptions) => {
  try {
        await transporter.sendMail(mailOptions)
        console.log('Email has been sent!');
  }     catch (error) {
        console.error(error);
  }
}

sendMail(transporter, mailOptions);

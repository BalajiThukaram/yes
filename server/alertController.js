require('dotenv').config();
const Hapi = require('hapi');
const twilio = require('twilio');
const nodemailer = require('nodemailer');

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTHTOKEN;

const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    type: process.env.TYPE,
    user: process.env.USER,
    pass: process.env.PASS,
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    refreshToken: process.env.REFRESHTOKEN
  }
});


const client = twilio(accountSid, authToken);


const caretakerSms = async (request,reply) => {
  const data = "Auto Alert Triggered"
  try {
    await client.messages.create({
      to: '+919176000110', 
      from: '+13203162312', 
      body: data
    });
    reply ('SMS message sent successfully');
  } catch (error) {
    console.error(error);
    reply ('Error sending SMS message');
  }
}

const emergencySms = async (request,reply) => {
  console.log("Ho")
  const data = "Auto Alert Triggered"
  try {
    await client.messages.create({
      to: '+919499051835', 
      from: '+13203162312', 
      body: data
    });
    reply ('SMS message sent successfully');
  } catch (error) {
    console.error(error);
    reply ('Error sending SMS message');
  }
}

const mailHospi =  async function(request,reply){
  const { text } = request.payload;
  const message={
    from: 'eldercaremain@gmail.com',
    to: 'vallee.annamalai@gmail.com' ,
    subject: "From ElderCare",
    text: text,
  }
  try{
    await transporter.sendMail(message);
    // reply("Email sent successfully");
    reply(true)
  }catch(error){
    const msg = "email failed"
    console.error(error);
    reply(msg)
  }
} 

const mailCare =  async function(request,reply){
  const { text } = request.payload;
  const message={
    from: 'eldercaremain@gmail.com',
    to: 'balajithukaram1234@gmail.com',
    subject: "From ElderCare",
    text: text,
  }
  try{
    await transporter.sendMail(message);
    // reply("Email sent successfully");
    reply(true)
  }catch(error){
    const msg = "email failed"
    console.error(error);
    reply(msg)
  }
}
module.exports= {
  caretakerSms,
  emergencySms,
  mailHospi,
  mailCare
}
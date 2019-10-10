var nodemailer = require('nodemailer')
var ejs = require('ejs')
var transporter

// CONFIG-NODEMAILER
function Config (params) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  try {
    // create reusable transporter object using the default SMTP transport
    transporter = nodemailer.createTransport(params)
  } catch (error) {
    console.log(error)
  }
}

// SEND-MAIL-WITH-TEMPLATE
function SendWithTemplate (params) {
  const { data } = ejs.renderFile(params.templateDir, params.templateValue)
  var mainOptions = {
    from: params.from, // sender address
    to: params.to, // list of receivers
    subject: params.subject, // Subject line
    text: params.text, // plain text body
    html: data
  }
  const response = transporter.sendMail(mainOptions)
  return response
}

// SEND-MAIL-WITH-TEMPLATE
async function Send (mainOptions) {
  // console.log("html data ======================>", mainOptions.html);
  const data = await transporter.sendMail(mainOptions)
  return data
}

module.exports = { Config, Send, SendWithTemplate }

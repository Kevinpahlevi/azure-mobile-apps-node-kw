
var mail = {
  host: 'smtp.googlemail.com', // Gmail Host
  port: 465, // Port
  secure: true, // this is true as port is 465
  auth: {
    user: "roy.parawali@gmail.com", // generated ethereal user
    pass:  "aremania87" // generated ethereal password
  }
}

var text = {
  from: 'roy.parawali@gmail.com', // sender address
  to: 'kevinplevi@gmail.com', // list of receivers
  subject: 'Send Email Text', // Subject line
  text: 'Send email text', // plain text body,
}

var attach = {
  from: 'replytest@gmail.com', // sender address
  to: 'kevinplevi@gmail.com', // list of receivers
  subject: 'Send email attachments', // Subject line
  text: 'Send email attachments', // plain text body,
  attachments: [{   // utf-8 string as an attachment
    filename: 'text1.txt',
    content: 'hello world!'
  },
  {
    path:  __dirname + '/template.html'
  }
  ]
}

var template = {
  from: 'roy.parawali@gmail.com', // sender address
  to: ['kevinplevi@gmail.com', 'frznkvn@gmail.com'], // list of receivers
  subject: 'Subject of your email', // Subject line
  text: 'FROM API! with template', // plain text body
  // eslint-disable-next-line no-path-concat
  templateDir: __dirname + '/template.html',
  templateValue: { name: 'KEVIN' }
}

var templateError = {
  from: 'roy.parawali@gmail.com', // sender address
  to: 'kevin@mail.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  text: 'FROM API!', // plain text body
  // eslint-disable-next-line no-path-concat
  templateDir: __dirname + '/src/email/template.html',
  templateValue: { name: 'KEVIN' }
}

module.exports = { mail, text, template, templateError, attach }

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
const { expect } = require('chai')
const Mail = require('../../../src/email')
const emailConfig = require('../../../src/email/email-config')

let server
describe('email.smtp', async () => {
  before(() => {
    Mail.Config(emailConfig.mail)
  })

  it('send email text', async () => {
    const data = await Mail.Send(emailConfig.text)
    console.log(data.accepted.length)
  })

  it('send email text and attachments', async () => {
    const data = await Mail.Send(emailConfig.attach)
    console.log(data.accepted.length)
  })

//   it('send email template', async () => {
//     const data = await Mail.SendWithTemplate(emailConfig.template)
//     console.log(data)
//   })

})

var express = require('express'),
    mail = require('../../email'),
    log = require('../../logger'),
    mailConfig = require('../../email/email-config')
    bodyParser = require('body-parser')

module.exports = function (configuration) {

    // FIRST AUTO CONFIG NODEMAIL
    mail.Config(mailConfig.mail)
    var router = express.Router()

   // USE PARSER TO HANDLE REQUEST
   router.use(bodyParser.json());

   // ROUTER
   router.route('/send').post(send);
//    router.route('/sendtemp').post(sendtemp);

   

   return router;

   async function send(req, res, next) {
       console.log('send email')
       const data  = await mail.Send(req.body)
       res.json(data)
   }

//    async function sendtemp(req, res, next) {
//     console.log('send email temp')
//     const data  = await mail.SendWithTemplate(req.body)
//     res.json(data)
// }

};


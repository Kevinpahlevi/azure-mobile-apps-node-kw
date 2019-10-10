var express = require('express'),
    notifications = require('../../firebase'),
    log = require('../../logger'),
    key = require('../../firebase/key.json'),
    notif = require('../../firebase/notif-key')
    bodyParser = require('body-parser')

module.exports = function (configuration) {

    // FIRST AUTO CONFIG FIREBASE
    notifications.Config(key, notif.database)
    var router = express.Router()

    // USE PARSER TO HANDLE REQUEST
    router.use(bodyParser.json());

    // ROUTER
    router.route('/send').post(send);
    router.route('/subcribe').post(subcribe);
    router.route('/unsubcribe').post(unsubcribe);
    router.route('/sendToTopic').post(sendToTopic)

    return router;

    async function send(req, res, next) {
       const data =  await notifications.Send(req.body.target, req.body.payload, req.body.options)
        res.json(data)
    };

    async function subcribe(req, res, next) {
        const data = await notifications.subscribed(req.body.token, req.body.topic)
        res.json(data)
    }

    async function unsubcribe(req, res, next) {
        const data = await notifications.unsubscribed(req.body.token, req.body.topic)
        res.json(data)
    }

    async function sendToTopic(req, res, next) {
        const data = await notifications.sendWithTopic(req.body.message)
        res.json(data)
    }


    function welcome(req, res, next) {
         console.log('FIREBASE')
         res.json('welcome firebase')
     };

};

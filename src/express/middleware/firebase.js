var express = require('express'),
    notifications = require('../../firebase'),
    log = require('../../logger');

module.exports = function (configuration) {
    // var router = express.Router(),
    //     installationClient = notifications(configuration.notifications);

    // router.use(notifications.Send);
    // router.route('/sendNotif')
    //     .put(respond)
    //     .delete(respond);

    // return router;

    // function respond(req, res, next) {
    //     var action = req.method === 'PUT' ? 'registration' : 'deletion';
    //     log.verbose('Received push notification installation ' + action + ' request. Returning stubbed response (registration only occurs when hosted on Azure).');
    //     res.status(204).end();
    // }
   return 'welcome to firebase!'
};

// // ----------------------------------------------------------------------------
// // Copyright (c) Microsoft Corporation. All rights reserved.
// // ----------------------------------------------------------------------------
// /**
//  * @module azure-mobile-apps/src/notifications
//  * @description Functions for managing notification installations and the NH client
//  */
// var NotificationHubService = require('azure-sb').NotificationHubService;

// /**
//  * Creates an instance of the notifications module specified in the configuration
//  * @param  {notificationsConfiguration} configuration The notifications configuration
//  * @return An object with members described below
//  */
// module.exports = function (configuration) {
//     var nhClient = createClient();

//     return {
//         /** Returns an instance of the {@link http://azure.github.io/azure-sdk-for-node/azure-sb/latest/NotificationHubService.html|Notification Hubs Service} */
//         getClient: function () { return nhClient; }
//     };

//     function createClient() {
//         if(!configuration)
//             return;
//         if(configuration.client)
//             return configuration.client;
//         if(configuration.hubName && configuration.connectionString)
//             return new NotificationHubService(configuration.hubName, configuration.connectionString);
//         if(configuration.hubName && configuration.endpoint && configuration.sharedAccessKeyName && configuration.sharedAccessKeyValue)
//             return new NotificationHubService(configuration.hubName, configuration.endpoint, configuration.sharedAccessKeyName, configuration.sharedAccessKeyValue);
//     }
// }

var admin = require('firebase-admin')

var firebase

// CONFIG-FIREBASE-CLOUD
function Config (serviceAccount, databaseURL) {
  try {
    firebase = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL
    })
  } catch (Error) {
    console.log('ERROR CONFIG : ', Error)
  }
}

// SEND-NOTIFICATION
async function Send (target, payload, options) {
  try {
    const data = await firebase.messaging().sendToDevice(target, payload, options)
    // .then(function(response) {
    //   console.log("Successfully sent message:", response);
    // })
    // .catch(function(error) {
    //   console.log("Error sending message:", error);
    // });

    return data
  } catch (error) {
    return error
  }
}

async function subscribed (token, topic) {
  try {
    const data = await firebase.messaging().subscribeToTopic(token, topic)
    // .then(function(response) {
    //   // See the MessagingTopicManagementResponse reference documentation
    //   // for the contents of response.
    //   console.log(response)
    //  return response
    // })
    // .catch(function(error) {
    //  return error
    // });
    return data
  } catch (error) {
    return error
  }
}

async function unsubscribed (token, topic) {
  try {
    const data = await firebase.messaging().unsubscribeFromTopic(token, topic)
    // .then(function(response) {
    //   // See the MessagingTopicManagementResponse reference documentation
    //   // for the contents of response.
    //   console.log(response)
    //  return response
    // })
    // .catch(function(error) {
    //  return error
    // });
    return data
  } catch (error) {
    return error
  }
}

async function sendWithTopic (params) {
  try {
  // Send a message to devices subscribed to the provided topic.
    const data = await admin.messaging().send(params)
    return data
  } catch (error) {
    return error
  }
}

module.exports = { Config, Send, subscribed, unsubscribed, sendWithTopic }




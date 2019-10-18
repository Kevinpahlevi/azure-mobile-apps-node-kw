var admin = require('firebase-admin')

//INSTANCE
var firebase

// GET INSTANCE
function getClient(){
  return firebase
}

// CONFIG-FIREBASE-CLOUD
function Config (serviceAccount, databaseURL) {
  try {
    if (!admin.apps.length) {
    firebase = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL
    })
    console.log('Config Firebase Done', firebase.name)
  }
  } catch (Error) {
    console.log('ERROR CONFIG : ', Error)
  }
}

// SEND-NOTIFICATION
async function Send (target, payload, options) {
  try {
    const data = await firebase.messaging().sendToDevice(target, payload, options)
    return data
  } catch (error) {
    return error
  }
}

async function subscribed (token, topic) {
  try {
    const data = await firebase.messaging().subscribeToTopic(token, topic)
    return data
  } catch (error) {
    return error
  }
}

async function unsubscribed (token, topic) {
  try {
    const data = await firebase.messaging().unsubscribeFromTopic(token, topic)
    return data
  } catch (error) {
    return error
  }
}

async function sendWithTopic (params) {
  try {
    const data = await admin.messaging().send(params)
    return data
  } catch (error) {
    return error
  }
}

module.exports = { Config, Send, subscribed, unsubscribed, sendWithTopic }
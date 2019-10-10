const { expect } = require('chai')
var Notification = require('../../../src/firebase/index')
var serviceAccount = require('../../../src/firebase/key.json')
var notifConfig = require('../../../src/firebase/notif-key')
var topic = 'topic-mocha-test'
var topicBatch = 'topic-mocha-test-batch'
var count = 1
var countBatch = notifConfig.targetBatch.length

describe('notification', async () => {
    before(() => {
      Notification.Config(serviceAccount, notifConfig.database)
    })
  
    it('Send notification on single device', async () => {
      const response = await Notification.Send(notifConfig.target, notifConfig.payload, notifConfig.options)
      expect(response.successCount).to.equal(count)
    })
  
    it('Send notification on batch device', async () => {
      const response = await Notification.Send(notifConfig.targetBatch, notifConfig.payloadBatch, notifConfig.options)
      expect(response.successCount).to.equal(countBatch)
    })
  
    it('Send notification on random device must error', async () => {
      const response = await Notification.Send('RANDOM-DEVICE', notifConfig.payload, notifConfig.options)
      expect(response.failureCount).to.equal(count)
    })
  
    // SINGLE
    it('Subcribe topic single device', async () => {
      const response = await Notification.subscribed(notifConfig.target, topic)
      expect(response.successCount).to.equal(count)
    })
  
    it('Send Notif to topic single device', async () => {
      const response = await Notification.sendWithTopic(notifConfig.messageTest)
      // expect(response.successCount).to.equal(count)
      // console.log(response)
    })
  
    it('Unsubcribe topic single device', async () => {
      const response = await Notification.subscribed(notifConfig.target, topic)
      expect(response.successCount).to.equal(count)
    })
  
    // BATCH
    it('Subcribe topic batch device', async () => {
      const response = await Notification.subscribed(notifConfig.targetBatch, topicBatch)
      expect(response.successCount).to.equal(countBatch)
    })
  
    it('Send Notif to topic batch device', async () => {
      const response = await Notification.sendWithTopic(notifConfig.messageTestBatch)
      // expect(response.successCount).to.equal(count)
      // console.log(response)
    })
  
    it('Unsubcribe topic batch device', async () => {
      const response = await Notification.subscribed(notifConfig.targetBatch, topicBatch)
      expect(response.successCount).to.equal(countBatch)
    })

})
  
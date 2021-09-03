import { assert } from 'chai'
import { PublicationCollector } from 'meteor/johanbrook:publication-collector'
import Messages from '../collections/Messages.js'
import './publications.js'

describe('Publish messages', function () {
  beforeEach(function () {
    Messages.remove({})
    Messages.insert({
      text: 'This is a message 1',
      author_id: '',
      file_id: ''
    })
  })

  it('sends all messages', function (done) {
    const collector = new PublicationCollector()
    collector.collect('messages', (collections) => {
      assert.equal(collections.messages.length, 1)
      done()
    })
  })
})

// Tests for the behavior of the messages collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import Messages from './Messages.js';

if (Meteor.isServer) {
  describe('messages collection', function () {
    it('insert correctly', function () {
      const msgId = Messages.insert({
        text: 'this is a message',
        file_id: '',
        author_id: '',
      });
      const added = Messages.find({ _id: msgId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'messages');
      assert.equal(count, 1);
    });
  });
}

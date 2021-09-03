import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import Messages from '../collections/Messages.js';
import './methods.js';

if (Meteor.isServer) {
  describe('method: createMsg', function () {
    beforeEach(function () {
      Messages.remove({});
    });

    it('can add a new message', function () {
      const addMsg = Meteor.server.method_handlers['createMsg'];

      addMsg.apply({}, ['This is a message', '', '']);

      assert.equal(Messages.find().count(), 1);
    });
  });
}

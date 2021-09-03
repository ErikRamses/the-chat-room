import { Meteor } from 'meteor/meteor';
import Messages from '../collections/Messages.js';

Meteor.publish('messages', function () {
  return Messages.find();
});

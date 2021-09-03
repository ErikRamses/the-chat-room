import { Meteor } from 'meteor/meteor';
import Files from '../collections/Files.js';

Meteor.publish('files', function () {
  return Files.find();
});

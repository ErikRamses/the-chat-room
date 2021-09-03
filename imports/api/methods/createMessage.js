import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Messages from '../collections/Messages.js';

Meteor.methods({
  'createMsg'(text, file_id, author_id) {
    check(text, String);
    check(file_id, String);
    check(author_id, String);

    return Messages.insert({
      text: text,
      file_id: file_id,
      author_id: author_id,
      createdAt: new Date()
    });
  },
});

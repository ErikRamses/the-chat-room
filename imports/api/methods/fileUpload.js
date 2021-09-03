import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Files } from '../collections/Files.js';

Meteor.methods({
  'fileUpload'(name, data) {
    check(name, String);
    let file_id = Files.insert({
      file: data,
      isBase64: true,
      fileName: name,
      createdAt: new Date()
    });
    console.log(file_id);
    return file_id;
  }
});
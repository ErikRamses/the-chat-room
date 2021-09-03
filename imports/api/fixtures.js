import { Meteor } from 'meteor/meteor';
import Messages from './collections/Messages.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Messages.find().count() === 0) {
    const data = [
      {
        text: 'This is the first message',
        file_id: '',
        author_id: 'Admin',
        createdAt: new Date(),
      },
    ];

    data.forEach(msg => Messages.insert(msg));
  }
});

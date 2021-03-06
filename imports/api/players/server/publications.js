import { Meteor } from 'meteor/meteor';

import { Players } from '../schema.js';

Meteor.publish('Players.playersForAGame', (gameId) => {
  return Players.find({
    gameId
  }, {
    sort: {
      jersey: 1
    }
  });
});

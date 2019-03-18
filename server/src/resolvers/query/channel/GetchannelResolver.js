const channels = require('../../../data/channelData')
module.exports = function (root, { id }) {
  
   return channels.find(channel => channel.id === id);
};

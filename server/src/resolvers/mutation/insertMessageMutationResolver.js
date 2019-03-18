import { PubSub,withFilter } from 'graphql-subscriptions';
const channels = require('../../data/channelData')

let nextId = 3;
let nextMessageId = 5;
const pubsub = new PubSub();
const insertchannel =  function (root, args) {
    const newChannel = { id: String(nextId++), messages: [], name: args.name };
    channels.push(newChannel);
    return newChannel;
};

const insertMessages =  (root, { message }) => {
  const channel = channels.find(channel => channel.id === message.channelId);
  if(!channel)
    throw new Error("Channel does not exist");

  const newMessage = { id: String(nextMessageId++), text: message.text };
  channel.messages.push(newMessage);

  pubsub.publish('messageAdded', { messageAdded: newMessage, channelId: message.channelId });

  return newMessage;
}

const messageSubscription = () => {
	const message = withFilter(() => pubsub.asyncIterator('messageAdded'), (payload, variables) => {
    // The `messageAdded` channel includes events for all channels, so we filter to only
    // pass through events for the channel specified in the query
    return payload.channelId === variables.channelId;
  })
  return message
};


module.exports = { insertchannel,insertMessages ,messageSubscription };
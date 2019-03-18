
// Querry Resolvers
const channelsResolver = require('./resolvers/query/channel/GetChannelsResolver')
const messageResolver = require('./resolvers/query/channel/GetChannelResolver')
const playersResolver = require('./resolvers/query/players/getPlayersResolver')
const playerResolver = require('./resolvers/query/players/getPlayerResolver')
const githubRepoResolver = require('./resolvers/query/github/GetGithubRepoResolver')
// Mutation Resolvers
const {insertchannel,insertMessages,messageSubscription} = require('./resolvers/mutation/insertMessageMutationResolver')
const {insertplayer} = require('./resolvers/mutation/insertplayersMutationResolver')



const resolvers = {
  Query: {
    channels: channelsResolver,
    channel: messageResolver,
    players:playersResolver,
    player:playerResolver,
    listGiihubRepo:githubRepoResolver,
  },
  Mutation: {
    addChannel:insertchannel,
    addMessage: insertMessages,
    addPlayer:insertplayer,
  },
  Subscription: {
    messageAdded: {
      subscribe: messageSubscription()
    }
  },
};

module.exports = { resolvers };
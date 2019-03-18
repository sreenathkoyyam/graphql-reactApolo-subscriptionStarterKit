import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';
const MessageSchema = require('./schemas/messageSchema');
const ChannelSchema = require('./schemas/channelSchema');
const playersSchema = require('./schemas/playersSchema');
const githubRepoSchema = require('./schemas/githubRepoSchema');


const Query = `
#  GIT APIs
type Query {
  channels: [Channel]    # "[]" means this is a list of channels
  channel(id: ID!): Channel
  players:[Players]
  player(id: ID!): Players
  listGiihubRepo: [Players]
}
`;

const Mutation = `
  type Mutation {
    addChannel(name: String!): Channel
    addMessage(message: MessageInput!): Message
    addPlayer(input: playerInput!): [Players]

 }
`;
const Subscription = `
  type Subscription {
    messageAdded(channelId: ID!): Message

 }
`;


const SchemaDefinition = `
  schema {
    query: Query ,
    mutation: Mutation,
    subscription:Subscription
  }
`;


const typeDefs = [
	SchemaDefinition,
	Query,
	Mutation,
	Subscription,
  MessageSchema,
  ChannelSchema,
  playersSchema,
  githubRepoSchema
	]

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };

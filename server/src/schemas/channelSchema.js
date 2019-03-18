const ChannelSchema = `

type Channel {
    id: ID!                # "!" denotes a required field
    name: String
    messages: [Message]!
  }
 
`;

module.exports = ChannelSchema;

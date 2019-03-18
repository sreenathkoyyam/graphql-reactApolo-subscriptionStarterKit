const GetMessageSchema = `
input MessageInput{
  channelId: ID!
  text: String
}

type Message {
  id: ID!
  text: String
}
`;

module.exports = GetMessageSchema;

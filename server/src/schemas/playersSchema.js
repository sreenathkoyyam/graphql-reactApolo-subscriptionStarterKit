const playersSchema = `
# Return Players details
input playerInput{
    id: ID!
    name: String
  }

type Players {
    id: ID!,
    name: String
}
`;

module.exports = playersSchema;

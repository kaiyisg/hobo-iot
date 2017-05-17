const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// schema states what types are expected to return from each part
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type LightBulb {
    lightId: Int!
    toggleSwitch(toggle: Boolean!, personId: String!): Boolean
  }
  type Query {
    getLightById(lightId: Int!): LightBulb
  }
`);

// This class implements the LightBulb GraphQL type
class LightBulb {
  constructor(lightId) {
    this.lightId = lightId;
  }
  toggleSwitch({ personId, toggle }) {
    console.log(`${this.lightId}'s switch has been toggled ${toggle} by ${personId}`);
    return toggle;
  }
}

// The root provides a resolver for each endpoint, at the top level
// Especially useful for queries
const root = {
  getLightById: function ({ lightId }) {
    return new LightBulb(lightId);
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

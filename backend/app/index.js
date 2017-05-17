const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// schema states what types are expected to return from each part
const schema = buildSchema(`
  type Query {
    toggleLightSwitch(lightName: String!, switchOn: Boolean!, personId: String!): Boolean
  }
`);

// The root provides a resolver for each endpoint
const root = {
  toggleLightSwitch: function ({ lightName, switchOn, personId }) {
    lightName = 'hello';
    switchOn = true;
    personId = 'hello';
    return true;
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

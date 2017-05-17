const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const fakeDatabase = {
  1: {
    switchedOn: false,
  },
};

// schema states what types are expected to return from each part
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  input LightBulbSwitch {
    switchedOn: Boolean!
    person: String
  }
  type LightBulb {
    id: ID!
    switchedOn: Boolean!
  }
  type Query {
    getLightBulb(id: ID!): LightBulb!
  }
  type Mutation {
    switchLightOn(id: ID!, input: LightBulbSwitch!): LightBulb!
  }
`);

// This class implements the LightBulb GraphQL type
// any complex fields can be placed here
class LightBulb {
  constructor(id, { switchedOn }) {
    this.id = id;
    this.switchedOn = switchedOn;
  }
}

// The root provides a resolver for each endpoint, at the top level
// Especially useful for queries
const root = {
  getLightBulb: function ({ id }) {
    if (!fakeDatabase[id]) {
      throw new Error(`no lightbulb exists with id ${id}`);
    }
    console.log(fakeDatabase[id]);
    return new LightBulb(id, fakeDatabase[id]);
  },
  switchLightOn: function ({ id, input }) {
    if (!fakeDatabase[id]) {
      throw new Error(`no lightbulb exists with id ${id}`);
    }
    fakeDatabase[id] = input;
    console.log(fakeDatabase[id]);
    return new LightBulb(id, input);
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

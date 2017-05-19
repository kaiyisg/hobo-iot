const babelRelayPlugin = require('babel-relay-plugin');
const introspectionQuery = require('graphql/utilities').introspectionQuery;
const request = require('sync-request');
// const schema = require('../data/schema.json');

const graphqlHubUrl = 'http://10.0.0.191:4000/graphql';
const response = request('GET', graphqlHubUrl, {
  qs: {
    query: introspectionQuery
  }
});

var schema = JSON.parse(response.body.toString('utf-8'));

console.log(schema);

module.exports = babelRelayPlugin(schema.data, {
  abortOnError: true,
});

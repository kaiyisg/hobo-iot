# Hobo-iot backend

Requires node `>7.6.0`, Yarn

## Setup

## Development

To install dependencies:

`yarn`

## To do graphql queries
### Get (Query):
{
  getLightBulb(id:1) {
    id
    switchedOn
  }
}

### Post (Mutations):
mutation {
  switchLightOn(input: {switchedOn: true, person: "kai Yi"}, id: 1) {
    id
    switchedOn
  }
}

To develop

`sudo su`
`yarn dev`

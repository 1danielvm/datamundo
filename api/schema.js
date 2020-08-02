const PopulationModel = require('./models/PopulationModel')
const { gql } = require('apollo-server-express')

const typeDefs = gql`

  type Population {
    id: ID
    cover: String
    name: String
    emoji: String
    path: String
  }

  type Query {
    Population: [Population]
  }
`

const resolvers = {
  Query: {
    Population () {
      return PopulationModel.list()
    }
  }
}

module.exports = { typeDefs, resolvers }

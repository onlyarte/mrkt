const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
type Query {
  title: String!
  categories: [Category!]!
}

type Category {
  _id: ID!
  name: String!
  description: String
  parent: Category
}
`

const categories = [
  {
    _id: 'category-0',
    name: 'Men',
  },
  {
    _id: 'category-1',
    name: 'Women',
  },
]

const resolvers = {
  Query: {
    title: () => 'MRKT',
    categories: () => categories,
  },
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log('Server is running on http://localhost:4000'))

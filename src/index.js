const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
type Query {
  title: String!
  categories: [Category!]!
}

type Mutation {
  post(name: String!, description: String, parent: ID): Category!
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
  Mutation: {
    post: (parent, args) => {
      const category = {
        _id: `category-${categories.length}`,
        name: args.name,
        description: args.description,
        parent: args.parent,
      }
      categories.push(category)
      return category
    },
  },
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log('Server is running on http://localhost:4000'))

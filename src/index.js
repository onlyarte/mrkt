const { GraphQLServer } = require('graphql-yoga')

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
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log('Server is running on http://localhost:4000'))

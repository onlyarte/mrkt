const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
  Query: {
    title: () => 'MRKT',
    categories: (root, args, context, info) => {
      return context.prisma.categories()
    },
  },
  Mutation: {
    post: (parent, args, context) => {
      return context.prisma.createCategory({
        name: args.name,
        description: args.description,
        parent: args.parent,
      })
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
})

server.start(() => console.log('Server is running on http://localhost:4000'))

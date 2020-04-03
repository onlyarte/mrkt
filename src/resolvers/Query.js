const title = (parent, args, context, info) => 'MRKT'

const categories = (parent, args, context, info) => {
  return context.prisma.categories()
}

module.exports = { title, categories }

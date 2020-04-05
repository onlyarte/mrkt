const item = (parent, args, context, info) => {
  return context.prisma.wish({ id: parent.id }).item()
}

const user = (parent, args, context, info) => {
  return context.prisma.wish({ id: parent.id }).user()
}

module.exports = { item, user }

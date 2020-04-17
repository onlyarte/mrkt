const items = (parent, args, context, info) => {
  return context.prisma.order({ id: parent.id }).items()
}

const user = (parent, args, context, info) => {
  return context.prisma.oder({ id: parent.id }).user()
}

module.exports = { items, user }

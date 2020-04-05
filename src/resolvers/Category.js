const parent = (parent, args, context, info) => {
  return context.prisma.category({ id: parent.id }).parent()
}

const items = (parent, args, context, info) => {
  return context.prisma.category({ id: parent.id }).items()
}

module.exports = { parent, items }

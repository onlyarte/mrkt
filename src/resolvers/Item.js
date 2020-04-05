const category = (parent, args, context, info) => {
  return context.prisma.item({ id: parent.id }).category()
}

module.exports = { category }

const parent = (parent, args, context, info) => {
  return context.prisma.category({ id: parent.id }).parent()
}

module.exports = { parent }

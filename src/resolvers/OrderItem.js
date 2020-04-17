const item = (parent, args, context, info) => {
  return context.prisma.orderItem({ id: parent.id }).item()
}

module.exports = { item }

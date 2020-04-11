const parent = (parent, args, context, info) => {
  return context.prisma.category({ id: parent.id }).parent()
}

const items = (parent, args, context, info) => {
  const { filter: where = {}, skip, first, orderBy } = args
  const items = context.prisma
    .category({ id: parent.id })
    .items({ where, skip, first, orderBy })
  const count = context.prisma
    .itemsConnection({ where: { ...where, category: { id: parent.id } } })
    .aggregate()
    .count()
  return { items, count }
}

module.exports = { parent, items }

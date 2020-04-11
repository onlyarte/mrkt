const newCategorySubscribe = (parent, args, context, info) => {
  return context.prisma.$subscribe
    .category({ mutation_in: ['CREATED'] })
    .node()
}

const newCategory = {
  subscribe: newCategorySubscribe,
  resolve: payload => payload,
}

const newItemSubscribe = (parent, args, context, info) => {
  return context.prisma.$subscribe
    .item({ node: { category: { id: args.category } }, mutation_in: ['CREATED'] })
    .node()
}

const newItem = {
  subscribe: newItemSubscribe,
  resolve: payload => payload,
}

module.exports = { newCategory, newItem }

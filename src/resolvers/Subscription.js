const newCategorySubscribe = (parent, args, context, info) => {
  return context.prisma.$subscribe.category({ mutation_in: ['CREATED'] }).node()
}

const newCategory = {
  subscribe: newCategorySubscribe,
  resolve: payload => {
    return payload
  },
}

module.exports = { newCategory }

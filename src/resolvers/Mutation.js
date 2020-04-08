const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

const signup = async (parent, args, context, info) => {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })
  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  return { token, user }
}

const login = async (parent, args, context, info) => {
  const user = await context.prisma.user({ email: args.email })
  if (!user) throw new Error('User not found')
  const isValid = await bcrypt.compare(args.password, user.password)
  if (!isValid) throw new Error('Wrong password')
  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  return { token, user }
}

const createCategory = (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.prisma.createCategory({
    name: args.name,
    description: args.description,
    parent: { connect: { id: args.parent } },
  })
}

const updateCategory = (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.prisma.updateCategory({
    data: args,
    where: { id: args.id }
  })
}

const deleteCategory = (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.prisma.deleteCategory({ id: args.id })
}

const createItem = (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.prisma.createItem({
    name: args.name,
    description: args.description,
    category: { connect: { id: args.category } },
    price: args.price,
  })
}

const updateItem = (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.prisma.updateItem({
    data: args,
    where: { id: args.id }
  })
}

const deleteItem = (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.prisma.deleteItem({ id: args.id })
}

const wish = async (parent, args, context, info) => {
  const userId = getUserId(context)
  const isAdded = await context.prisma.$exists.wish({
    item: { id: args.item },
    user: { id: userId },
  })
  if (isAdded) throw new Error('Already added')
  return context.prisma.createWish({
    item: { connect: { id: args.item } },
    user: { connect: { id: userId } },
  })
}

module.exports = {
  signup,
  login,
  createCategory,
  updateCategory,
  deleteCategory,
  createItem,
  updateItem,
  deleteItem,
  wish,
}

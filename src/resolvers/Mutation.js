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

const post = async (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.prisma.createCategory({
    name: args.name,
    description: args.description,
    parent: { connect: { id: args.parent } },
  })
}

module.exports = { signup, login, post }

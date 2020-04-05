const wishes = (parent, args, context, info) => {
  return context.prisma.wishes({ user: parent.id }).parent()
}

module.exports = { wishes }

module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCategory {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Category {
  id: ID!
  createdAt: DateTime!
  name: String!
  description: String
  parent: Category
}

type CategoryConnection {
  pageInfo: PageInfo!
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  id: ID
  name: String!
  description: String
  parent: CategoryCreateOneInput
}

input CategoryCreateOneInput {
  create: CategoryCreateInput
  connect: CategoryWhereUniqueInput
}

type CategoryEdge {
  node: Category!
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
}

type CategoryPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  description: String
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
  AND: [CategorySubscriptionWhereInput!]
  OR: [CategorySubscriptionWhereInput!]
  NOT: [CategorySubscriptionWhereInput!]
}

input CategoryUpdateDataInput {
  name: String
  description: String
  parent: CategoryUpdateOneInput
}

input CategoryUpdateInput {
  name: String
  description: String
  parent: CategoryUpdateOneInput
}

input CategoryUpdateManyMutationInput {
  name: String
  description: String
}

input CategoryUpdateOneInput {
  create: CategoryCreateInput
  update: CategoryUpdateDataInput
  upsert: CategoryUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CategoryWhereUniqueInput
}

input CategoryUpsertNestedInput {
  update: CategoryUpdateDataInput!
  create: CategoryCreateInput!
}

input CategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  parent: CategoryWhereInput
  AND: [CategoryWhereInput!]
  OR: [CategoryWhereInput!]
  NOT: [CategoryWhereInput!]
}

input CategoryWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createCategory(data: CategoryCreateInput!): Category!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateManyCategories(data: CategoryUpdateManyMutationInput!, where: CategoryWhereInput): BatchPayload!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  category(where: CategoryWhereUniqueInput!): Category
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  node(id: ID!): Node
}

type Subscription {
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
}
`
      }
    
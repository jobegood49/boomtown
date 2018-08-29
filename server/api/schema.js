const { gql } = require('apollo-server')

/**
 *  @TODO: Boomtown Schema
 *
 * Define the types in your GraphQL schema here.
 * For each type, remove the `_: Boolean` placeholder and add the
 * fields as directed. Be sure to finish writing resolvers for all types
 * and any relational fields, where required.
 *
 * We will create the custom Date scalar together.
 */
module.exports = gql`
  scalar Upload
  scalar Date

  directive @auth on OBJECT | FIELD_DEFINITION

  type Item @auth {
    id: ID!
    title: String!
    imageurl: String
    description: String
    itemowner: User!
    tags: [Tag]
    created: Date!
    borrower: User
  }

  type User @auth {
    id: ID!
    email: String!
    fullname: String!
    bio: String
    items: [Item]
    borrowed: [Item]
  }

  type Tag @auth {
    id: ID!
    title: String!
  }

  type File @auth {
    id: ID!
    filename: String!
    mimetype: String!
    encoding: String!
    itemid: ID!
  }

  input AssignedTag {
    id: ID!
    title: String!
  }

  input AssignedBorrower {
    id: ID!
  }

  input NewItemInput {
    title: String!
    description: String
    tags: [AssignedTag]
  }

  input SignUpInput {
    email: String!
    password: String!
    fullname: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    user(id: ID!): User
    viewer: User
    items(filter: ID): [Item]
    tags: [Tag]
  }

  type Mutation {
    addItem(item: NewItemInput!,image:Upload!): Item
    image: [Upload]
    signup(user: SignUpInput!): User
    login(user: LoginInput!): Boolean!
    logout: Boolean
  }
`

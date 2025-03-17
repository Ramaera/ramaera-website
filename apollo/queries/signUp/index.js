import { gql } from "@apollo/client"

export const ADD_USER = gql(`
mutation signup(
  $name: String!
  $email: String!
  $password: String!
  $role: Role!
) {
  signup(
    data: { name: $name, email: $email, password: $password, role: $role }
  ) {
    user {
      name
      role
      email
    }
  }
}
`)

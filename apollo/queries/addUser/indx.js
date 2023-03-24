import { gql } from "@apollo/client"

export const ADD_USER = gql(`
mutation signup (
$Name: String!,
$Email: String!,
$Password: String!,
$Role: Role!,
){signup(
    data: {
      name:$Name
      email:$Email
      password:$Password
      role:$Role
    }) 
    {
      user
      {
        name
        role
        id
        email
      }
    }
}`)

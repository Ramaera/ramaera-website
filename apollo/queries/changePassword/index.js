import { gql } from "@apollo/client"

export const CHANGE_PASSWORD = gql(`
mutation changePassword (
$oldPassword: String!,
$newPassword: String!,
){changePassword(
    data: {
      oldPassword:$oldPassword
      newPassword: $newPassword    
    }) 
    {
      name
      email
    }
}`)

import { gql } from "@apollo/client"

export const CHANGE_PASSWORD = gql(`
mutation changePassword (
$OldPassword: String!,
$NewPassword: String!,
){changePassword(
    data: {
      oldPassword:$OldPassword
      newPassword: $NewPassword    
    }) 
    {
      name
    }
}`)

import { gql } from "@apollo/client"

export const VISIT_US = gql(`
mutation createVisitorForm (
  $date: String!,
$email: String!,
$mobileNumber: String!,
$name: String!,
$numberOfPeople: String,
$plantName: String!,
$pwId: String,
$reason: String!,
$typeOfVisit: String!,
$address: String!,
){createVisitorForm(
    data: {
      date: $date
email: $email
mobileNumber: $mobileNumber
name: $name
numberOfPeople: $numberOfPeople
plantName: $plantName
pwId: $pwId
reason: $reason
typeOfVisit: $typeOfVisit
address: $address
    }) 
    {
      name
    }
}`)

export const GET_ALL_VISITORS = gql(`
  query {
  findAllVisitorsList {
    date
    name
    email
    id
    reason
    mobileNumber
    numberOfPeople
    pwId
    typeOfVisit
    plantName
    address
  }
}`)

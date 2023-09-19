import { gql } from "@apollo/client";

export const SALES_ENQUIRY = gql(`
mutation createSalesEnquiry (
$email: String!,
$mobileNumber: String!,
$name: String!,
$quantity: String!,
$product: String!,
$remarks: String!,
$address: String!,
){createSalesEnquiry(
    data: {
email: $email
mobileNumber: $mobileNumber
name: $name
quantity: $quantity
product: $product
remarks: $remarks
address: $address
    }) 
    {
      name
    }
}`);

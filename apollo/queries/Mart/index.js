import { gql } from "@apollo/client";

export const CREATE_DAILY_SALE = gql`
  mutation CreateDailySale(
    $martName: String!
    $amount: Int!
    $paymentMethod: String!
    $saleDate: DateTime!
  ) {
    createDailySale(
      createDailySaleInput: {
        martName: $martName
        amount: $amount
        paymentMethod: $paymentMethod
        saleDate: $saleDate
      }
    ) {
      amount
      martName
      paymentMethod
      saleDate
    }
  }
`;

export const GET_SALES_OF_MART = gql(`
query SalesOfMart ($martName: String!)  {
    SalesOfMart(martName: $martName) {
        amount
        martName
        paymentMethod
        saleDate
    }
}
`);

import { gql } from "@apollo/client";

export const UPDATE_VISIT_US = gql(`
mutation UpdateVisitorForm (
$visitorID: String!,
$email: String!,
){UpdateVisitorForm(
    data: {
      visitorID: $visitorID
      email: $email
    }) 
    {
      email
    }
}`);

export const CREATE_POS_ENQUIRY = gql(`
mutation createPosenquiry(
  $name: String!
  $email: String!
  $Number_of_persons_in_POS_City: String!
  $mobileNumber: String!
  $pwid: String!
  $CityName: String!
) {
  createPosenquiry(
    createPosenquiryInput: {
      name: $name
      email: $email
      Number_of_persons_in_POS_City: $Number_of_persons_in_POS_City
      mobileNumber: $mobileNumber
      pwid: $pwid
      CityName: $CityName
    }
  ) {
    email
    name
    CityName
    mobileNumber
    Number_of_persons_in_POS_City
    pwid
  }
}
`);

export const UPDATE_APPLICATIONS = gql(`
mutation UpdateApplication (
$applicationId: String!,
$email: String!,
){UpdateApplication(
    data: {
      applicationId: $applicationId
      email: $email
    }) 
    {
      email
    }
}`);
export const CREATE_APPLICATIONS = gql(`
mutation creator ($District: String!,
$State: String!,
$applicantAddress: String!,
$applicantType: ApplicantType!,
$email: String!,
$firmName: String!,
$mobileNumber: String!,
$name: String!,
$extraInfo: String!,
){createApplication(
    data: {
      name: $name
      applicantType: $applicantType
      applicantAddress: $applicantAddress
      email: $email
      firmName: $firmName
      mobileNumber: $mobileNumber
      District: $District
      State: $State
      extraInfo :$extraInfo
    }) 
    {
      name
    }
}`);

export const CREATE_CONTACT_RESPONSE = gql(`
mutation createUs (
  $name: String!,
      $email: String!
      $company: String!,
      $Subject: String!,
     $message: String!,
){createContactUsResponse(
    data: {
      name: $name
      email: $email
      company: $company
      Subject: $Subject
      message: $message
    }) 
    {
      name
    }
}`);

export const LOG_IN = gql(`
mutation loginUser (
$email: String!,
$password: String!,
){login(
    data: {
      email: $email
      password: $password
    }) 
    {
      accessToken
      user{
      role
      name
    }
    }
}`);

export const GET_APPLICATIONS = gql(`
  query getAllApps{
  applicants{
    id
    name
    email
    District
    State
    applicantType
    applicantAddress
    firmName
    mobileNumber
    extraInfo
    createdAt
    updatedAt
  }
}`);

export const GET_CONTACT_RESPONSES = gql(`
  query getContactResponses{
    contactUsRepsonses{
      name
      email
      company
      Subject
      message
  }
}`);

export const GET_POSD_RESPONSES = gql(`
query posenquiry {
  posenquiry{
    name
    email
    mobileNumber
    pwid
    CityName
   Number_of_persons_in_POS_City
  }
}`);

export const CREATE_WATER_DISTRIBUTION_APPLICATIONS = gql(`
  mutation CreateWaterDistributionApplication (
          $name: String!,
          $email: String!,
          $mobile: String!,
          $altMobile: String!,
          $dob: String!,
          $aadhaar: String!,
          $state: String!,
          $district: String!,
          $pincode: String!,
          $address: String!,
          $pwID: String!,
          $firmName: String!,
          $firmRegistration: String!,
          $bankName: String!,
          $bankAccount: String!,
          $bankIfsc: String!,
          $gst: String!,
          $appliedFor: String!,
          $distributorArea: String!,

  ){createWaterDistributionApplication(
      data: {
          name: $name
          email: $email
          mobile: $mobile
          altMobile: $altMobile
          dob: $dob
          aadhaar: $aadhaar
          state: $state
          district: $district
          pincode: $pincode
          address: $address
          pwID: $pwID
          firmName: $firmName
          firmRegistration: $firmRegistration
          bankName: $bankName
          bankAccount: $bankAccount
          bankIfsc: $bankIfsc
          gst: $gst
          appliedFor: $appliedFor
          distributorArea: $distributorArea
      }) 
      {
      State
      address
      appliedFor
      district
      email
      mobile
      name
      pwID
      }
  }`);

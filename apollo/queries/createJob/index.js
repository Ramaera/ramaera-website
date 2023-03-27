import { gql } from "@apollo/client"

export const CREATE_JOB = gql(`
mutation createJob (
$department: String!,
$jobDescription: String!,
$jobLocation: String!,
$jobTitle: String!,
$jobType: String!,
$jobStatus: JOBSTATUS!,
){createJob(
    data: {
      department: $department
      jobDescription: $jobDescription
      jobLocation: $jobLocation
      jobTitle: $jobTitle
      jobType: $jobType
      jobStatus:$jobStatus
    }) 
    {
      jobType
    }
}`)


export const GET_APPLICATIONS = gql(`
  query getAllJobDetails{
    AllJobDetails{
    department
    jobDescription
    jobLocation
    jobTitle
    jobType
    jobStatus
  }
}`)


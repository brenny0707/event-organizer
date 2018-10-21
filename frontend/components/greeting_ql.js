import gql from "graphql-tag";

export const ALL_ORGANIZERS = gql`
  {
    allOrganizers {
      id
      fname
    }
  }
`

export const CREATE_SESSION = gql`
  mutation createSession($email: String!,
											 $password: String!) {
  createSession(email: $email,
    						password: $password) {
    organizer {
      id
      fname
      email
    }
    token
  }
}
`

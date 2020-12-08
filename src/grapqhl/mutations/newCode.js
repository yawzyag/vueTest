import gql from "graphql-tag";

const newCode = gql`
  mutation createZipcode(
    $code: String!
    $city: String!
    $state: String!
    $userEmail: String!
  ) {
    createZipcode(
      code: $code
      city: $city
      state: $state
      userEmail: $userEmail
    ) {
      status
      message
    }
  }
`;

export { newCode };

import gql from "graphql-tag";

const isCoveredByExpress = gql`
  query getZipcodes($limit: Int, $skip: Int, $search: String) {
    getZipcodes(limit: $limit, skip: $skip, search: $search) {
      total
      zipcodes {
        id
        code
        city
        state
        nice_bounds
      }
    }
  }
`;

export { isCoveredByExpress };

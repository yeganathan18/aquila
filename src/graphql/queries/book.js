import { gql } from "@apollo/client";

export const ALL_BOOKS_QUERY = gql`
  query {
    books {
      id
      title
      isbn
    }
  }
`;
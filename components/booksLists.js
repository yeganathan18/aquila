import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

export const ALL_BOOKS_QUERY = gql`
  query {
    books {
      id
      title
      isbn
    }
  }
`;

function BooksList() {
  const { loading, error, data } = useQuery(ALL_BOOKS_QUERY);

  if (error) return <div>Error loading Boooks.</div>;
  if (loading) return <div>Loading</div>;

  const { books } = data;

  console.log("data", data.books);
  // console.log('hhh', blogs);

  return <h2>Helo world!</h2>;
}

export default BooksList;
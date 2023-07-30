import { gql } from "@apollo/client";
import { BOOK_FRAGMENT } from "../fragments/book";

export const LIST_BOOKS_QUERY = gql`
  query ListBooks(
    $filter: TableBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ...Book
      }
      nextToken
    }
  }
  ${BOOK_FRAGMENT}
`;

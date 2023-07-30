import { gql } from "@apollo/client";
import { BOOK_FRAGMENT } from "../fragments/book";

export const UPDATE_BOOK_MUTATION = gql`
  mutation UpdateBook($input: UpdateBookInput!) {
    updateBook(input: $input) {
      ...Book
    }
  }
  ${BOOK_FRAGMENT}
`;

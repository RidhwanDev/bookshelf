import { gql } from "@apollo/client";
import { BOOK_FRAGMENT } from "../fragments/book";

export const CREATE_BOOK_MUTATION = gql`
  mutation CreateBook($input: CreateBookInput!) {
    createBook(input: $input) {
      ...Book
    }
  }
  ${BOOK_FRAGMENT}
`;

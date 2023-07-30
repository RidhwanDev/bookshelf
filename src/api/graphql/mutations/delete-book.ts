import { gql } from "@apollo/client";
import { BOOK_FRAGMENT } from "../fragments/book";

export const DELETE_BOOK_MUTATION = gql`
  mutation DeleteBook($input: DeleteBookInput!) {
    deleteBook(input: $input) {
      ...Book
    }
  }
  ${BOOK_FRAGMENT}
`;

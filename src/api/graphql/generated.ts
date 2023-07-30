import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  AWSDateTime: { input: Date; output: Date };
};

export type Book = {
  __typename?: "Book";
  authors?: Maybe<Array<Scalars["String"]["output"]>>;
  createdAt?: Maybe<Scalars["AWSDateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  favourite?: Maybe<Scalars["Boolean"]["output"]>;
  id: Scalars["ID"]["output"];
  imageLinks?: Maybe<ImageLinks>;
  infoLink?: Maybe<Scalars["String"]["output"]>;
  previewLink?: Maybe<Scalars["String"]["output"]>;
  publishedDate: Scalars["String"]["output"];
  publisher: Scalars["String"]["output"];
  status?: Maybe<BookStatus>;
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["AWSDateTime"]["output"]>;
};

export type BookConnection = {
  __typename?: "BookConnection";
  items?: Maybe<Array<Maybe<Book>>>;
  nextToken?: Maybe<Scalars["String"]["output"]>;
};

export enum BookStatus {
  Read = "READ",
  Reading = "READING",
  Unread = "UNREAD",
}

export type CreateBookInput = {
  authors?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  favourite?: InputMaybe<Scalars["Boolean"]["input"]>;
  imageLinks?: InputMaybe<ImageLinksInput>;
  infoLink?: InputMaybe<Scalars["String"]["input"]>;
  previewLink?: InputMaybe<Scalars["String"]["input"]>;
  publishedDate: Scalars["String"]["input"];
  publisher: Scalars["String"]["input"];
  status?: InputMaybe<BookStatus>;
  title: Scalars["String"]["input"];
};

export type DeleteBookInput = {
  id: Scalars["ID"]["input"];
};

export type ImageLinks = {
  __typename?: "ImageLinks";
  smallThumbnail?: Maybe<Scalars["String"]["output"]>;
  thumbnail?: Maybe<Scalars["String"]["output"]>;
};

export type ImageLinksInput = {
  smallThumbnail?: InputMaybe<Scalars["String"]["input"]>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createBook?: Maybe<Book>;
  deleteBook?: Maybe<Book>;
  updateBook?: Maybe<Book>;
};

export type MutationCreateBookArgs = {
  input: CreateBookInput;
};

export type MutationDeleteBookArgs = {
  input: DeleteBookInput;
};

export type MutationUpdateBookArgs = {
  input: UpdateBookInput;
};

export type Query = {
  __typename?: "Query";
  getBook?: Maybe<Book>;
  listBooks?: Maybe<BookConnection>;
};

export type QueryGetBookArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryListBooksArgs = {
  filter?: InputMaybe<TableBookFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type TableBookFilterInput = {
  authors?: InputMaybe<TableStringFilterInput>;
  favourite?: InputMaybe<TableBooleanFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  publishedDate?: InputMaybe<TableStringFilterInput>;
  publisher?: InputMaybe<TableStringFilterInput>;
  title?: InputMaybe<TableStringFilterInput>;
};

export type TableBooleanFilterInput = {
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  ne?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TableIdFilterInput = {
  beginsWith?: InputMaybe<Scalars["ID"]["input"]>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  contains?: InputMaybe<Scalars["ID"]["input"]>;
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  ge?: InputMaybe<Scalars["ID"]["input"]>;
  gt?: InputMaybe<Scalars["ID"]["input"]>;
  le?: InputMaybe<Scalars["ID"]["input"]>;
  lt?: InputMaybe<Scalars["ID"]["input"]>;
  ne?: InputMaybe<Scalars["ID"]["input"]>;
  notContains?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TableStringFilterInput = {
  beginsWith?: InputMaybe<Scalars["String"]["input"]>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  eq?: InputMaybe<Scalars["String"]["input"]>;
  ge?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  le?: InputMaybe<Scalars["String"]["input"]>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  notContains?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateBookInput = {
  authors?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  favourite?: InputMaybe<Scalars["Boolean"]["input"]>;
  id: Scalars["ID"]["input"];
  infoLink?: InputMaybe<Scalars["String"]["input"]>;
  previewLink?: InputMaybe<Scalars["String"]["input"]>;
  publishedDate?: InputMaybe<Scalars["String"]["input"]>;
  publisher?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type BookFragment = {
  __typename?: "Book";
  id: string;
  title: string;
  authors?: Array<string> | null;
  description?: string | null;
  publisher: string;
  publishedDate: string;
  status?: BookStatus | null;
  favourite?: boolean | null;
  infoLink?: string | null;
  previewLink?: string | null;
  imageLinks?: {
    __typename?: "ImageLinks";
    smallThumbnail?: string | null;
    thumbnail?: string | null;
  } | null;
};

export type CreateBookMutationVariables = Exact<{
  input: CreateBookInput;
}>;

export type CreateBookMutation = {
  __typename?: "Mutation";
  createBook?: {
    __typename?: "Book";
    id: string;
    title: string;
    authors?: Array<string> | null;
    description?: string | null;
    publisher: string;
    publishedDate: string;
    status?: BookStatus | null;
    favourite?: boolean | null;
    infoLink?: string | null;
    previewLink?: string | null;
    imageLinks?: {
      __typename?: "ImageLinks";
      smallThumbnail?: string | null;
      thumbnail?: string | null;
    } | null;
  } | null;
};

export type DeleteBookMutationVariables = Exact<{
  input: DeleteBookInput;
}>;

export type DeleteBookMutation = {
  __typename?: "Mutation";
  deleteBook?: {
    __typename?: "Book";
    id: string;
    title: string;
    authors?: Array<string> | null;
    description?: string | null;
    publisher: string;
    publishedDate: string;
    status?: BookStatus | null;
    favourite?: boolean | null;
    infoLink?: string | null;
    previewLink?: string | null;
    imageLinks?: {
      __typename?: "ImageLinks";
      smallThumbnail?: string | null;
      thumbnail?: string | null;
    } | null;
  } | null;
};

export type UpdateBookMutationVariables = Exact<{
  input: UpdateBookInput;
}>;

export type UpdateBookMutation = {
  __typename?: "Mutation";
  updateBook?: {
    __typename?: "Book";
    id: string;
    title: string;
    authors?: Array<string> | null;
    description?: string | null;
    publisher: string;
    publishedDate: string;
    status?: BookStatus | null;
    favourite?: boolean | null;
    infoLink?: string | null;
    previewLink?: string | null;
    imageLinks?: {
      __typename?: "ImageLinks";
      smallThumbnail?: string | null;
      thumbnail?: string | null;
    } | null;
  } | null;
};

export type ListBooksQueryVariables = Exact<{
  filter?: InputMaybe<TableBookFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type ListBooksQuery = {
  __typename?: "Query";
  listBooks?: {
    __typename?: "BookConnection";
    nextToken?: string | null;
    items?: Array<{
      __typename?: "Book";
      id: string;
      title: string;
      authors?: Array<string> | null;
      description?: string | null;
      publisher: string;
      publishedDate: string;
      status?: BookStatus | null;
      favourite?: boolean | null;
      infoLink?: string | null;
      previewLink?: string | null;
      imageLinks?: {
        __typename?: "ImageLinks";
        smallThumbnail?: string | null;
        thumbnail?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export const BookFragmentDoc = gql`
  fragment Book on Book {
    id
    title
    authors
    description
    publisher
    publishedDate
    imageLinks {
      smallThumbnail
      thumbnail
    }
    status
    favourite
    infoLink
    previewLink
  }
`;
export const CreateBookDocument = gql`
  mutation CreateBook($input: CreateBookInput!) {
    createBook(input: $input) {
      ...Book
    }
  }
  ${BookFragmentDoc}
`;
export type CreateBookMutationFn = Apollo.MutationFunction<
  CreateBookMutation,
  CreateBookMutationVariables
>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBookMutation,
    CreateBookMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(
    CreateBookDocument,
    options,
  );
}
export type CreateBookMutationHookResult = ReturnType<
  typeof useCreateBookMutation
>;
export type CreateBookMutationResult =
  Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<
  CreateBookMutation,
  CreateBookMutationVariables
>;
export const DeleteBookDocument = gql`
  mutation DeleteBook($input: DeleteBookInput!) {
    deleteBook(input: $input) {
      ...Book
    }
  }
  ${BookFragmentDoc}
`;
export type DeleteBookMutationFn = Apollo.MutationFunction<
  DeleteBookMutation,
  DeleteBookMutationVariables
>;

/**
 * __useDeleteBookMutation__
 *
 * To run a mutation, you first call `useDeleteBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookMutation, { data, loading, error }] = useDeleteBookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteBookMutation,
    DeleteBookMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(
    DeleteBookDocument,
    options,
  );
}
export type DeleteBookMutationHookResult = ReturnType<
  typeof useDeleteBookMutation
>;
export type DeleteBookMutationResult =
  Apollo.MutationResult<DeleteBookMutation>;
export type DeleteBookMutationOptions = Apollo.BaseMutationOptions<
  DeleteBookMutation,
  DeleteBookMutationVariables
>;
export const UpdateBookDocument = gql`
  mutation UpdateBook($input: UpdateBookInput!) {
    updateBook(input: $input) {
      ...Book
    }
  }
  ${BookFragmentDoc}
`;
export type UpdateBookMutationFn = Apollo.MutationFunction<
  UpdateBookMutation,
  UpdateBookMutationVariables
>;

/**
 * __useUpdateBookMutation__
 *
 * To run a mutation, you first call `useUpdateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookMutation, { data, loading, error }] = useUpdateBookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBookMutation,
    UpdateBookMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateBookMutation, UpdateBookMutationVariables>(
    UpdateBookDocument,
    options,
  );
}
export type UpdateBookMutationHookResult = ReturnType<
  typeof useUpdateBookMutation
>;
export type UpdateBookMutationResult =
  Apollo.MutationResult<UpdateBookMutation>;
export type UpdateBookMutationOptions = Apollo.BaseMutationOptions<
  UpdateBookMutation,
  UpdateBookMutationVariables
>;
export const ListBooksDocument = gql`
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
  ${BookFragmentDoc}
`;

/**
 * __useListBooksQuery__
 *
 * To run a query within a React component, call `useListBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBooksQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListBooksQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListBooksQuery,
    ListBooksQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ListBooksQuery, ListBooksQueryVariables>(
    ListBooksDocument,
    options,
  );
}
export function useListBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListBooksQuery,
    ListBooksQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ListBooksQuery, ListBooksQueryVariables>(
    ListBooksDocument,
    options,
  );
}
export type ListBooksQueryHookResult = ReturnType<typeof useListBooksQuery>;
export type ListBooksLazyQueryHookResult = ReturnType<
  typeof useListBooksLazyQuery
>;
export type ListBooksQueryResult = Apollo.QueryResult<
  ListBooksQuery,
  ListBooksQueryVariables
>;
export function refetchListBooksQuery(variables?: ListBooksQueryVariables) {
  return { query: ListBooksDocument, variables: variables };
}

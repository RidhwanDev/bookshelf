import { gql } from "@apollo/client";

export const SEARCH_GOOGLE_BOOKS_QUERY = gql`
  query SearchGoogleBooks($query: String!, $apiKey: String!, $startIndex: Int) {
    searchGoogleBooks(query: $query, apiKey: $apiKey, startIndex: $startIndex)
      @rest(
        type: "SearchBooks"
        path: "?q={args.query}&key={args.apiKey}&startIndex={args.startIndex}"
      ) {
      totalItems
      items @type(name: "GoogleBook") {
        id
        volumeInfo @type(name: "GoogleBookVolumeInfo") {
          title
          authors
          description
          publisher
          publishedDate
          imageLinks @type(name: "GoogleBookImageLinks") {
            smallThumbnail
            thumbnail
          }
          infoLink
          previewLink
        }
      }
    }
  }
`;

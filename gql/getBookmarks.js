import { gql } from 'graphql-tag';

// ... component up here, detailed later

const GET_BOOKMARKS = gql`
  query GetBookmarks {
    bookmarks {
      id
      title
      url
    }
  }
`;

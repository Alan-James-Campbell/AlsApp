/* tslint:disable */
/* eslint-disable */

export const listPublicBlogs = /* GraphQL */ `
  query ListPublicBlogs {
    listBlogs(filter: {private: {eq: false}}) {
      items {
        body
        createdAt
        id
        private
        title
        updatedAt
      }
      nextToken
    }
  }
`;
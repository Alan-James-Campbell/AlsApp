/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      title
      body
      private
      tags
      createdBy
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      title
      body
      private
      tags
      createdBy
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      title
      body
      private
      tags
      createdBy
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      text
      reaction
      createdBy
      blog {
        id
        title
        body
        private
        tags
        createdBy
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      text
      reaction
      createdBy
      blog {
        id
        title
        body
        private
        tags
        createdBy
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      text
      reaction
      createdBy
      blog {
        id
        title
        body
        private
        tags
        createdBy
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

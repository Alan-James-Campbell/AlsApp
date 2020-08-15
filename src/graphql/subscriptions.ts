/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      title
      body
      comments {
        nextToken
      }
      createdBy
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
      comments {
        nextToken
      }
      createdBy
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
      comments {
        nextToken
      }
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      blogID
      blog {
        id
        title
        body
        createdBy
        createdAt
        updatedAt
      }
      content
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      blogID
      blog {
        id
        title
        body
        createdBy
        createdAt
        updatedAt
      }
      content
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      blogID
      blog {
        id
        title
        body
        createdBy
        createdAt
        updatedAt
      }
      content
      createdBy
      createdAt
      updatedAt
    }
  }
`;

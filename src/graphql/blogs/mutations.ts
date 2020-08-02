/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewBlog = /* GraphQL */ `
  mutation CreateNewBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
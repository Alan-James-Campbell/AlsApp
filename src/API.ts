/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogInput = {
  id?: string | null,
  title: string,
  body: string,
  createdBy?: string | null,
};

export type ModelBlogConditionInput = {
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateBlogInput = {
  id: string,
  title?: string | null,
  body?: string | null,
  createdBy?: string | null,
};

export type DeleteBlogInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  blogID: string,
  content: string,
  createdBy?: string | null,
};

export type ModelCommentConditionInput = {
  blogID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  blogID?: string | null,
  content?: string | null,
  createdBy?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  blogID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog:  {
    __typename: "Blog",
    id: string,
    title: string,
    body: string,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    createdBy: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog:  {
    __typename: "Blog",
    id: string,
    title: string,
    body: string,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    createdBy: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog:  {
    __typename: "Blog",
    id: string,
    title: string,
    body: string,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    createdBy: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    blogID: string,
    blog:  {
      __typename: "Blog",
      id: string,
      title: string,
      body: string,
      createdBy: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdBy: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    blogID: string,
    blog:  {
      __typename: "Blog",
      id: string,
      title: string,
      body: string,
      createdBy: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdBy: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    blogID: string,
    blog:  {
      __typename: "Blog",
      id: string,
      title: string,
      body: string,
      createdBy: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdBy: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog:  {
    __typename: "Blog",
    id: string,
    title: string,
    body: string,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    createdBy: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      title: string,
      body: string,
      createdBy: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    blogID: string,
    blog:  {
      __typename: "Blog",
      id: string,
      title: string,
      body: string,
      createdBy: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdBy: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      blogID: string,
      content: string,
      createdBy: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog:  {
    __typename: "Blog",
    id: string,
    title: string,
    body: string,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    createdBy: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog:  {
    __typename: "Blog",
    id: string,
    title: string,
    body: string,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    createdBy: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog:  {
    __typename: "Blog",
    id: string,
    title: string,
    body: string,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    createdBy: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    blogID: string,
    blog:  {
      __typename: "Blog",
      id: string,
      title: string,
      body: string,
      createdBy: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdBy: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    blogID: string,
    blog:  {
      __typename: "Blog",
      id: string,
      title: string,
      body: string,
      createdBy: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdBy: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    blogID: string,
    blog:  {
      __typename: "Blog",
      id: string,
      title: string,
      body: string,
      createdBy: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdBy: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

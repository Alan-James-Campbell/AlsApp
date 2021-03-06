import { BlogActionTypes, BLOG_REFRESH_PUBLIC_LIST, BLOG_NEWLY_CREATED_BLOG } from '../types/blog'
import gql from 'graphql-tag';
import { listBlogs } from '../graphql/queries'
import { createBlog } from '../graphql/mutations'
import { onCreateBlog } from '../graphql/subscriptions'
import API, { graphqlOperation } from '@aws-amplify/api';

export const refreshPublicBlogList = (blogs: Array<Object>): BlogActionTypes => ({ type: BLOG_REFRESH_PUBLIC_LIST, payload: blogs })
export const updateNewlyCreatedBlog = (newlyCreatedBlog: object): BlogActionTypes => ({ type: BLOG_NEWLY_CREATED_BLOG, payload: newlyCreatedBlog })
// export const toggleBlogCreateSuccess = (newlyCreatedBlog: object): BlogActionTypes => ({ type: TOGGLE_BLO, payload: newlyCreatedBlog })



export const getAllPublicBlogs = (client: any) => (dispatch: any) => {
  client.query({ query: gql(listBlogs) })
    .then(({ data }: any) => {
      dispatch(refreshPublicBlogList(data.listBlogs.items))
    })
    .catch((err: any) => console.log(err))
}

export const createNewBlogAction = (client: any, blogBody: object) => (dispatch: any) => {

  client.mutate({ 
    mutation: gql(createBlog),
    variables: {input: blogBody}
  })
  .then(({data}: any) => {
    const newlyCreatedBlog = data.createBlog
    dispatch(updateNewlyCreatedBlog(newlyCreatedBlog))
  })
  .catch((err: any) => console.log(err))
}





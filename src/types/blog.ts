export const BLOG_REFRESH_PUBLIC_LIST = 'BLOG_REFRESH_PUBLIC_LIST'
export const BLOG_NEWLY_CREATED_BLOG = 'BLOG_NEWLY_CREATED_BLOG'

interface refreshPublicBlogList {
  type: typeof BLOG_REFRESH_PUBLIC_LIST
  payload: Array<Object>
}

interface updateNewlyCreatedBlog {
  type: typeof BLOG_NEWLY_CREATED_BLOG
  payload: Object
}

export type BlogActionTypes = refreshPublicBlogList | updateNewlyCreatedBlog

export interface publicBlogInterface {
  body: string,
  createdAt: string,
  id: string,
  private: boolean,
  title: string,
  updatedAt: string,
  __typename: string
}







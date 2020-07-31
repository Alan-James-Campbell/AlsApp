import { BLOG_REFRESH_PUBLIC_LIST, BLOG_NEWLY_CREATED_BLOG, publicBlogInterface } from '../types/blog'

export interface BlogInterface {
  publicBlogList: publicBlogInterface[],
  newlyCreatedBlog: Object
  blogCreationSuccess: boolean
}

const initialState: BlogInterface = {
  publicBlogList: [],
  newlyCreatedBlog: {},
  blogCreationSuccess: false
}

const reducer = (state = initialState, action: any): BlogInterface => {

  switch (action.type) {

    case BLOG_REFRESH_PUBLIC_LIST:
      return {
        ...state,
        publicBlogList: action.payload
      }

    case BLOG_NEWLY_CREATED_BLOG:
      return {
        ...state,
        newlyCreatedBlog: action.payload
      }

      

    default:
      return state
  }
}

export default reducer
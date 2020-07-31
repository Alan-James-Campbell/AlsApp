import BlogIndex from './blogIndexComponent'
import { RootState } from '../../../reducers/rootReducer';
import { connect } from 'react-redux'
import { getAllPublicBlogs, createNewBlog } from '../../../actions/blogActions'

const mapStateToProps = (state: RootState) => {
  const { appSyncClient } = state.session
  const { publicBlogList } = state.blog
  const isSessionActive = Object.keys(appSyncClient).length > 0

  return {
    isSessionActive,
    publicBlogList,
    client: appSyncClient
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  getAllPublicBlogs(client: object) {
    return dispatch(getAllPublicBlogs(client))
  },
  createNewBlog(client: object, body: object) {
    return dispatch(createNewBlog(client, body))
  }, 
    
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogIndex)
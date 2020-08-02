import BlogForm from './blogFormComponent'
import { RootState } from '../../reducers/rootReducer'
import { connect } from 'react-redux'
import { createNewBlogAction } from '../../actions/blogActions'

const mapStateToProps = (state: RootState) => {
  const { appSyncClient } = state.session

  return {
    client: appSyncClient
  }
}

const mapDispatchToProps = (dispatch: any) => ({
    createNewBlogAction(client: object, body: object) {
    dispatch(createNewBlogAction(client, body))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm)
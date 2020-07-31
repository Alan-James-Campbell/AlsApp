import Main from './mainComponent'
import { RootState } from '../../reducers/rootReducer'
import { connect } from 'react-redux'
import { establishAppSyncClient } from '../../actions/sessionActions'

const mapStateToProps = (state: RootState) => {
  const { appSyncClient } = state.session

  return {
    appSyncClient
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  establishAppSyncClient() {
    dispatch(establishAppSyncClient())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
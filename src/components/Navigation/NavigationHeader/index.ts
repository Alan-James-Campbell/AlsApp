import NavigationHeader from './navigationHeaderComponent'
import { RootState } from '../../../reducers/rootReducer'
import { connect } from 'react-redux'
import { toggleNavigationDrawer } from '../../../actions/navigationActions'

const mapStateToProps = (state: RootState) => {
  const { isNavigationDrawerOpen } = state.navigation

  return {
    isNavigationDrawerOpen
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  toggleNavigationDrawer(bool: boolean) {
    dispatch(toggleNavigationDrawer(bool))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationHeader)
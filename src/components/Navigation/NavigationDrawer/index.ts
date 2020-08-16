import NavigationDrawer from './navigationDrawerComponent'
import { RootState } from '../../../reducers/rootReducer'
import { connect } from 'react-redux'
import { updateDrawerToggleState } from '../../../actions/navigationActions'

const mapStateToProps = (state: RootState) => {
  const { drawerToggleState } = state.navigation
  const isNavigationDrawerOpen = drawerToggleState.navigation

  return {
    drawerToggleState,
    isNavigationDrawerOpen
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  updateDrawerToggleState(name: string) {
    dispatch(updateDrawerToggleState(name))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)
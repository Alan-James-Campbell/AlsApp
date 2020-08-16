import MapDrawer from './mapDrawerComponent'
import { RootState } from '../../reducers/rootReducer'
import { connect } from 'react-redux'
import { updateDrawerToggleState } from '../../actions/navigationActions'

const mapStateToProps = (state: RootState) => {
  const { drawerToggleState } = state.navigation
  const isMapDrawerOpen = drawerToggleState.map

  return {
    isMapDrawerOpen
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  updateDrawerToggleState(name: string) {
    dispatch(updateDrawerToggleState(name))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MapDrawer)
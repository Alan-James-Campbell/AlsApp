import WeatherDrawer from './weatherDrawerComponent'
import { connect } from 'react-redux'
import { updateDrawerToggleState } from '../../actions/navigationActions'

const mapStateToProps = state => {
  const { drawerToggleState } = state.navigation
  const isWeatherDrawerOpen = drawerToggleState.weather

  return {
    isWeatherDrawerOpen
  }
}

const mapDispatchToProps = dispatch => ({
  updateDrawerToggleState(name) {
    dispatch(updateDrawerToggleState(name))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDrawer)
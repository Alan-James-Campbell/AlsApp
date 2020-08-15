import Home from './homeComponent'
import { RootState } from '../../reducers/rootReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state: RootState) => {

  return {
  }
}

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
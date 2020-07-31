import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router' 
import history from '../history'
import blogReducer from './blog'
import navigationReducer from './navigation'
import sessionReducer from './session'

export const rootReducer = combineReducers({
  router: connectRouter(history),
  blog: blogReducer,
  navigation: navigationReducer,
  session: sessionReducer,
})

export type RootState = ReturnType<typeof rootReducer>
import { NAVIGATION_TOGGLE_DRAWER } from '../types/navigation'
import _ from 'lodash'

export interface DrawerToggleStateInterface {
  navigation: boolean,
  map: boolean
}

export interface NavigationStateInterface {
  drawerToggleState: any
}

  
const initialState: NavigationStateInterface = {  
    drawerToggleState: {
      navigation: false,
      map: false
    }
}

const reducer = (state = initialState, action: any ): NavigationStateInterface => {
  
    switch (action.type) {
      case NAVIGATION_TOGGLE_DRAWER:
        const name:string  = action.payload
        const copy = _.cloneDeep(state.drawerToggleState)
        copy[name] = !state.drawerToggleState[name]
        
        return {
          ...state, 
          drawerToggleState: copy
        }      

      default:
        return state
    }
  }
  
  export default reducer
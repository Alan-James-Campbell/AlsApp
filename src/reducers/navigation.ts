import { NAVIGATION_TOGGLE_DRAWER } from '../types/navigation'

export interface SessionStateInterface {
    isNavigationDrawerOpen: boolean
}
  
const initialState: SessionStateInterface = {  
    isNavigationDrawerOpen: false
}

const reducer = (state = initialState, action: any ): SessionStateInterface => {
  
    switch (action.type) {
      case NAVIGATION_TOGGLE_DRAWER:
        return {
          ...state, 
          isNavigationDrawerOpen: action.payload
        }      

      default:
        return state
    }
  }
  
  export default reducer
import { SESSION_SET_CURRENT_CLIENT } from '../types/session'

export interface SessionStateInterface {
    appSyncClient: Object
}
  
const initialState: SessionStateInterface = {  
    appSyncClient: {}
}

const reducer = (state = initialState, action: any ): SessionStateInterface => {
  
    switch (action.type) {
      case SESSION_SET_CURRENT_CLIENT:
        return {
          ...state, 
          appSyncClient: action.payload
        }      

      default:
        return state
    }
  }
  
  export default reducer
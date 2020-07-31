export const SESSION_SET_CURRENT_CLIENT = 'SESSION_SET_CURRENT_CLIENT'

interface SetCurrentClientAction {
  type: typeof SESSION_SET_CURRENT_CLIENT
  payload: Object
}

export type SessionActionTypes = SetCurrentClientAction

// export type SessionActionTypes = SetCurrentClientAction | SecondExampleAction
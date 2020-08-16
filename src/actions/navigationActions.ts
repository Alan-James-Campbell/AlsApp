import { NavigationActionTypes, NAVIGATION_TOGGLE_DRAWER } from '../types/navigation'

export const updateDrawerToggleState = (name: string): NavigationActionTypes => ({type: NAVIGATION_TOGGLE_DRAWER, payload: name})
import { NavigationActionTypes, NAVIGATION_TOGGLE_DRAWER } from '../types/navigation'

export const toggleNavigationDrawer = (bool: boolean): NavigationActionTypes => ({type: NAVIGATION_TOGGLE_DRAWER, payload: bool})
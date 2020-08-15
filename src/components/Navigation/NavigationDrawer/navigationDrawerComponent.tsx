import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import CalendarIcon from '@material-ui/icons/Today'


import './NavigationDrawer.css'

const NavigationDrawer = ({ isNavigationDrawerOpen, toggleNavigationDrawer }: NavigationDrawerProps) => {

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleRouteClick = (e: any, route: string) => {
    e.preventDefault()
    navigate(route)
    toggleNavigationDrawer(!isNavigationDrawerOpen)
  }

  return (
    <div className='NavigationDrawerContainer'>
      <Drawer
        open={isNavigationDrawerOpen}
        onClose={e => toggleNavigationDrawer(!isNavigationDrawerOpen)}
      >

        <div id='NavDrawerListContainer'>
          <List>
            {listItemRouteList.map((item, key) => {
              const {name, icon, label} = item
              return (
                <ListItem
                  key={key}
                  button
                  disabled={pathname === name}
                  selected={pathname === name}
                  onClick={e => handleRouteClick(e, name)}
                >
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                  />
                </ListItem>

              )
            })}



          </List>
        </div>

      </Drawer>
    </div>
  )
}

interface NavigationDrawerProps {
  isNavigationDrawerOpen: boolean,
  toggleNavigationDrawer: Function
}

export default NavigationDrawer

const listItemRouteList = [
  {
    name: '/',
    label: 'Home',
    icon: <HomeIcon/>
  },
  {
    name: '/reservations',
    label: 'Reservations',
    icon: <CalendarIcon/>
  }
]
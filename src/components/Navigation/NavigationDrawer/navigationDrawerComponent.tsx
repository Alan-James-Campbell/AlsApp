import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import ListAltIcon from '@material-ui/icons/ListAlt'
import CreateIcon from '@material-ui/icons/Create'
import HomeIcon from '@material-ui/icons/Home'

import './NavigationDrawer.css'

const NavigationDrawer = ({ isNavigationDrawerOpen, toggleNavigationDrawer }: NavigationDrawerProps) => {

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleRouteClick = (route: string) => {
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
                  selected={pathname === name}
                  onClick={e => handleRouteClick(name)}
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
    name: '/my-blog',
    label: 'MyBlog',
    icon: <CreateIcon/>
  },
  {
    name: '/my-todo-list',
    label: 'MyToDoList',
    icon: <ListAltIcon/>
  },
  {
    name: '/my-gains',
    label: 'MyGains',
    icon: <FitnessCenterIcon/>
  }
]
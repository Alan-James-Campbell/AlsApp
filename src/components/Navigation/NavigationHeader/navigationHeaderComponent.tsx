import React, { useState } from 'react'
import NavigationDrawer from '../NavigationDrawer'
import MapDrawer from '../../MapDrawer'
import WeatherDrawer from '../../WeatherDrawer'

import { AppBar, Badge, Drawer, IconButton, InputBase, MenuItem, Toolbar, Typography, Menu } from '@material-ui/core'
import { AccountCircle, Mail as MailIcon, Menu as MenuIcon, MoreVert as MoreIcon, Notifications as NotificationsIcon, Search as SearchIcon, 
         WbSunny as SunIcon, MonetizationOn as MonetizationOnIcon, LiveHelp as FaqIcon, LocationOn as LocationOnIcon
       } from '@material-ui/icons'
import { Auth } from 'aws-amplify'
import { useNavigationStyles } from '../navigationStyles'
import './NavigationHeader.css'
import ReactToolTip from 'react-tooltip'


const NavigationHeader = ({isNavigationDrawerOpen, updateDrawerToggleState}: NavigationHeaderProps) => {
  const classes = useNavigationStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null)

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: any) => setMobileMoreAnchorEl(event.currentTarget)

  const handleDrawerIconClick = (name: string) => {
    handleMobileMenuClose()
    updateDrawerToggleState(name)
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={e => Auth.signOut()}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      classes={{paper: classes.mobileMenuPaper}}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem onClick={e => handleDrawerIconClick('map')}>
        <IconButton aria-label='locationButton' color='secondary'>
            <LocationOnIcon style={{marginRight: '5px'}}/>
            Location
        </IconButton>
      </MenuItem>

      <MenuItem onClick={e => handleDrawerIconClick('weather')}>
        <IconButton aria-label='weatherButton' color='secondary'>
            <SunIcon style={{marginRight: '5px'}}/>
            Weather
        </IconButton>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label='costButton' color='secondary'>
            <MonetizationOnIcon style={{marginRight: '5px'}}/>
            Cost
        </IconButton>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label='faqButton' color='secondary'>
            <FaqIcon style={{marginRight: '5px'}}/>
            FAQ
        </IconButton>
      </MenuItem>

      
      {/* <MenuItem>
        <IconButton aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      {/* <MenuItem>
        <IconButton aria-label='show 11 new notifications' color='inherit'>
          <Badge badgeContent={11} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar 
        position='fixed'
        classes={{root: classes.appBar}}
      >
        <Toolbar>
          <ReactToolTip/>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='secondary'
            aria-label='open drawer'
            onClick={e => updateDrawerToggleState('navigation')}
          >
            <MenuIcon id='navHeaderHamburgerIcon'/>
          </IconButton>
          <Typography className={classes.grow} variant='h6' id='navHeaderTitle' color='secondary' noWrap>
            Havasu Parasail
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

           <IconButton color='secondary'>
              <LocationOnIcon 
                data-tip='Location'
                onClick={e => updateDrawerToggleState('map')}
              />
            </IconButton>

            <IconButton color='secondary'>
              <SunIcon 
                data-tip='Local Weather'
                onClick={e => updateDrawerToggleState('weather')}
              />
            </IconButton>

            <IconButton color='secondary'>
              <MonetizationOnIcon data-tip='Cost'/>
            </IconButton>

            <IconButton color='secondary'>
              <FaqIcon data-tip='Frequently Asked Questions'/>
            </IconButton>

            {/* <IconButton aria-label='show 4 new mails' color='inherit'>
              <Badge badgeContent={4} color='secondary'>
                <MailIcon />
              </Badge>
            </IconButton> */}
            {/* <IconButton aria-label='show 17 new notifications' color='inherit'>
              <Badge badgeContent={17} color='secondary'>
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            {/* <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton> */}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='secondary'
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <span id='navigationDrawers'>
        <NavigationDrawer/>
        <MapDrawer/>
        <WeatherDrawer/>



      </span>

    </div>
  )
}

interface NavigationHeaderProps {
  isNavigationDrawerOpen: boolean,
  updateDrawerToggleState: Function
}

export default NavigationHeader
import React, { useState } from 'react'
import NavigationDrawer from '../NavigationDrawer'
import { AppBar, Badge, Drawer, IconButton, InputBase, MenuItem, Toolbar, Typography, Menu } from '@material-ui/core'
import { AccountCircle, Mail as MailIcon, Menu as MenuIcon, MoreVert as MoreIcon, Notifications as NotificationsIcon, Search as SearchIcon, WbSunny as SunIcon} from '@material-ui/icons'
import { Auth } from 'aws-amplify'
import { useNavigationStyles } from '../navigationStyles'
import './NavigationHeader.css'
import ReactToolTip from 'react-tooltip'

const NavigationHeader = ({isNavigationDrawerOpen, toggleNavigationDrawer}: NavigationHeaderProps) => {
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
      <MenuItem>
      <IconButton aria-label='weatherButton' color='secondary'>
          <SunIcon />
          Weather
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
            onClick={e => toggleNavigationDrawer(!isNavigationDrawerOpen)}
          >
            <MenuIcon id='navHeaderHamburgerIcon'/>
          </IconButton>
          <Typography className={classes.grow} variant='h6' id='navHeaderTitle' color='secondary' noWrap>
            Havasu Parasail
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color='secondary'>
              <SunIcon 
                data-tip='Local Weather'
              />
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

      <NavigationDrawer/>

    </div>
  )
}

interface NavigationHeaderProps {
  isNavigationDrawerOpen: boolean,
  toggleNavigationDrawer: Function
}

export default NavigationHeader
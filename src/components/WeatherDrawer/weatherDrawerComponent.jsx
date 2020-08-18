import React, { useEffect } from 'react'
import { Drawer, IconButton } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import ReactToolTip from 'react-tooltip'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import { useWeatherDrawerStyles } from './weatherDrawerStyles'
import Weather from 'simple-react-weather'

const apikey='2c80b30479847fb3ee221ef77f605348' 


const TheWeatherDrawer = ({ isWeatherDrawerOpen, updateDrawerToggleState }) => {
  const classes = useWeatherDrawerStyles()

  return (
    <Drawer
      open={isWeatherDrawerOpen}
      onClose={e => updateDrawerToggleState('weather')}
      anchor='bottom'
    >
      <ReactToolTip />
      <Alert
        severity='info'
        onClick={e => updateDrawerToggleState('weather')}
        classes={{ message: classes.closeAlert, icon: classes.closeIcon, root: classes.weatherAlertRoot }}
        data-tip='Click to Close'
      >
        <AlertTitle>
            <Weather unit="F" city="Lake Havasu City" appid={apikey} onLoad={e => alert('yo')}/>
        </AlertTitle>
      </Alert>
    </Drawer>
  )
}


export default TheWeatherDrawer


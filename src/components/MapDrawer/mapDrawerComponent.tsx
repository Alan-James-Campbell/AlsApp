import React, { useState } from 'react'
import { Drawer, IconButton } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import ReactToolTip from 'react-tooltip'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Spinner from 'react-spinkit'
import { useMapDrawerStyles } from './mapDrawerStyles'

const TheMapDrawer = ({ isMapDrawerOpen, updateDrawerToggleState }: MapDrawerProps) => {

  const [isMapLoading, updateIsMapLoading] = useState(true)
  const classes = useMapDrawerStyles()

  return (
    <Drawer
      open={isMapDrawerOpen}
      onClose={e => updateDrawerToggleState('map')}
      anchor='bottom'
    >
      <ReactToolTip />

      <Alert
        severity='info'
        onClick={e => updateDrawerToggleState('map')}
        classes={{ message: classes.closeAlert, icon: classes.closeIcon }}
        data-tip='Click to Close'
      >
        <AlertTitle>
          <IconButton
            aria-label="close"
            color="primary"
            size="small"
          >
            <ArrowDropDownCircleIcon fontSize="inherit" />
          </IconButton>
        </AlertTitle>
      </Alert>

      {isMapLoading ? (<Spinner style={{textAlign: 'center', marginTop: '20px'}} name="ball-pulse-sync" color="#F50057"/>) : null}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52633.18398357033!2d-114.38333749235723!3d34.462960247710726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d1ed6e3c2b22b5%3A0xf638c316c5ca7e88!2sThe%20Nautical%20Beachfront%20Resort!5e0!3m2!1sen!2sus!4v1597558415764!5m2!1sen!2sus"
        width="100%"
        height={(window.innerHeight - 110)}
        frameBorder="0"
        style={{ border: 0, margin: '0 auto', display: 'block' }}
        allowFullScreen aria-hidden="false" tabIndex={0}
        onLoad={e => updateIsMapLoading(false)}
      >
      </iframe>
    </Drawer>
  )
}

interface MapDrawerProps {
  isMapDrawerOpen: boolean,
  updateDrawerToggleState: Function
}

export default TheMapDrawer


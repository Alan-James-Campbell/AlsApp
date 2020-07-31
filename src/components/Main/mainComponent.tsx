import React, { useEffect } from 'react'
import { withAuthenticator } from 'aws-amplify-react'
import Navigation from '../Navigation/NavigationHeader'

const Main = ({appSyncClient, establishAppSyncClient}: MainProps) => {

  useEffect(() => {
    if(!(Object.keys(appSyncClient).length > 0)){
      establishAppSyncClient()
    }
  })

  return (
    <div>
      <Navigation/>
    </div>
  )
}

export default withAuthenticator(Main, false)

interface MainProps {
  appSyncClient: Object,
  establishAppSyncClient: Function
}

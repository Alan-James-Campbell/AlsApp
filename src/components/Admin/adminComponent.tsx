import React, { useEffect } from 'react'
import { withAuthenticator } from 'aws-amplify-react'
import './Admin.css'

const Main = ({appSyncClient, establishAppSyncClient}: MainProps) => {

  useEffect(() => {
    if(!(Object.keys(appSyncClient).length > 0)){
      establishAppSyncClient()
    }
  })

  return (
    <div>
      Admin Page
    </div>
  )
}

export default withAuthenticator(Main, false)

interface MainProps {
  appSyncClient: Object,
  establishAppSyncClient: Function
}

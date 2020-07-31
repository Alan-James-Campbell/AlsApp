import { Auth } from 'aws-amplify'
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync'
import config from '../aws-exports'
import { SessionActionTypes, SESSION_SET_CURRENT_CLIENT } from '../types/session'

export const setCurrentClient = (client: Object): SessionActionTypes => ({type: SESSION_SET_CURRENT_CLIENT, payload: client})

export const establishAppSyncClient = () => (dispatch: any) => {
  Auth.currentAuthenticatedUser()
  .then(user => {
    const token:string = user.signInUserSession.accessToken.jwtToken
    
    const client = new AWSAppSyncClient({
      url: config.aws_appsync_graphqlEndpoint,
      region: config.aws_appsync_region,
      auth: { type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS, jwtToken: token}
    })
    return client
  })
  .then(client => dispatch(setCurrentClient(client)))
  .catch(err => console.log(err))
}


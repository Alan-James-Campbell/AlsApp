import { makeStyles } from '@material-ui/core/styles'

export const useWeatherDrawerStyles = makeStyles((theme) => ({
  closeAlert: {
    margin: '0 auto'
  },
  closeIcon: {
    display: 'none'
  },
  weatherAlertRoot: {
    backgroundColor: 'black'
  }
}))
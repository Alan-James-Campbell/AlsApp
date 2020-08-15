import { fade, makeStyles } from '@material-ui/core/styles'

export const useNavigationStyles = makeStyles((theme) => ({
  appBar : {
    backgroundColor: 'black'
  },
  mobileMenuPaper: {
    // backgroundColor: 'transparent'
  },
  grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }))
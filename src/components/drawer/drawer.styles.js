import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  menuButton: {
    margin: theme.spacing(2),
    marginLeft: 0,
    width: 50,
    height: 50,
    borderRadius: 0,
    border: '1px solid #2e344e',
    position: 'fixed',
    top: 10,
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  // necessary for content to be below app bar
  topDrawer: {
    width: '100%',
    padding: 20,
    borderBottom: '1px solid #542292',
    textAlign: 'center'
  },
  profileImage: {
    height: '200px',
    width: '200px',
    borderRadius: 100,
    border: '7px solid #2e344e',
    verticalAlign: 'middle'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.colors.menu,
    borderTopRightRadius: 60,
    scrollbarWidth: 'none',
    boxShadow: '-3px 6px 6px 6px #483f4d',
    height: '100vh',
    borderRight: '1px solid #2e344e'
  },
  centerDrawer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  typography: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttomDrawer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 15,
    borderTop: '1px solid #2e344e'
  },
  content: {
    minHeight: '100vh',
    flexGrow: 1,
    position: 'relative',
    display: 'flex',
    padding: 60,
    backgroundColor: '#cdbfdd',
    [theme.breakpoints.down('sm')]: {
      padding: 15
    }
  }
}))
export default useStyles

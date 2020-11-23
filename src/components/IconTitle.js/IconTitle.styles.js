import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    padding: 20,
    [theme.breakpoints.down('xs')]: { padding: 5 },

    backgroundColor: theme.palette.primary.light1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  img: {
    width: 60
    // [theme.breakpoints.down('xs')]: { width: 5 },
  }
}))

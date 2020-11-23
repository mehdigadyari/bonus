import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: 400,
    backgroundColor: theme.palette.primary.light,
    margin: 'auto',
    marginTop: 100,
    padding: 25,
    paddingBottom: 10,
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      width: 300
    },
    '&:focus': {
      outline: 'none'
    }
  },
  topButtonDiv: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20
  },
  button: {
    margin: 10
  }
}))

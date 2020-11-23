import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  },
  reportTitleTextfield: {
    width: 200,
    marginTop: 15,
    marginBottom: 40
  },
  reportTextfield: {
    width: '80%',
    marginTop: 15
  },
  button: {
    marginTop: 20
  }
}))
export default useStyles

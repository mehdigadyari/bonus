import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: 300,
    backgroundColor: theme.palette.primary.light,
    margin: 'auto',
    marginTop: 100,
    padding: 25,
    paddingBottom: 10,
    borderRadius: 10,

    [theme.breakpoints.down('sm')]: {
      width: 300,
      padding: 20
    },
    '&:focus': {
      outline: 'none'
    }
  },
  codeInputDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  buttonDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginBottom: 5
    }
  },
  botomButtunDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseLine'
  }
}))

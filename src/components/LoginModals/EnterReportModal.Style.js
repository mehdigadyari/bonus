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
  textField: {
    marginTop: 10,
    marginBottom: 20,
    '& div': {
      height: 40
    }
  },
  topButtonDiv: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  botomButtounDiv: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    marginBottom: 10
  }
}))

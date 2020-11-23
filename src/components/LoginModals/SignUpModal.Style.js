import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: 500,
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
  topDiv: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'Wrap'
  },
  formGrid: {
    paddingRight: 10,
    paddingLeft: 10
  },
  textField: {
    marginTop: 10,
    marginBottom: 20,
    '& div': {
      height: 40
    }
  },
  buttonDiv: {
    display: 'flex',
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
  },
  codeInputDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20
  }
}))

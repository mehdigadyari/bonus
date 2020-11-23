import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    flex: 1
  },
  img: {
    width: 380,
    marginBottom: 20,
    [theme.breakpoints.down('md')]: {
      width: 300,
      marginTop: 60
    }
  },
  topGrid: {
    width: 400,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #1d2b9a',
    borderRadius: 10,
    color: '#fff',
    [theme.breakpoints.down('md')]: {
      width: 300
    }
  },
  inputGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%'
  },
  textField: {
    marginTop: 10,
    marginBottom: 20,
    '& div': {
      height: 40
    }
  },
  buttondiv: {
    display: 'flex',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    flex: 1,
    margin: 10,
    marginBottom: 10
  },
  buttonGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350
  },
  moment: {
    position: 'absolute',
    top: 30,
    left: 50,
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      width: 250,
      left: 0,
      right: 0,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  RGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  }
}))

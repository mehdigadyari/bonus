import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    [theme.breakpoints.down('xs')]: { padding: 10 },
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topGrid: {
    padding: 10,
    [theme.breakpoints.down('xs')]: { padding: 5 },
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid'
  },
  rightGrid: {
    padding: 20
    // justifyContent: 'space-between'
  },
  itemGrid: { [theme.breakpoints.down('xs')]: { marginTop: 20 } },
  itemButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftGrid: {
    padding: 20,
    [theme.breakpoints.down('xs')]: { paddingTop: 0 }
  },
  Img: {
    width: 100,
    [theme.breakpoints.down('sm')]: {
      width: 80
    }
  },
  imgGrid: {
    padding: 10
  },
  socialGrid: {
    marginTop: 20,
    justifyContent: 'center'
  },
  iconGrid: {
    width: 50,
    padding: 20
  }
}))

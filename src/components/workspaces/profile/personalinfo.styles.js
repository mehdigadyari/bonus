import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      padding: 10,
      paddingLeft: 0,
      paddingRight: 0,
      flexDirection: 'column-reverse'
    }
  },
  imgGrid: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20
  },
  img: { width: 200, borderRadius: 100 },
  infoGrid: {
    width: '100%',
    height: 130,
    display: 'flex',
    flexDirection: 'column'
    // alignItems: 'center'
  }
}))

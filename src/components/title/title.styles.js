import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    width: '100%',
    paddingBottom: 20,
    position: 'relative',
    marginBottom: 20,

    '&:before': {
      content: "''",
      bottom: 0,
      position: 'absolute',
      width: 100,
      height: 4,
      borderRadius: 2,
      backgroundColor: '#fff'
    },
    '&:after': {
      content: "''",
      bottom: 0,
      position: 'absolute',
      width: 50,
      height: 4,
      borderRadius: 2,
      backgroundColor: '#000'
    }
  }
}))

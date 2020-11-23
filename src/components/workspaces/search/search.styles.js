import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center'
    }
  },
  topDiv: {
    display: 'flex',
    flexDirection: 'column'
  },
  formDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    height: 80,
    [theme.breakpoints.down('sm')]: {
      // flexDirection: 'column',
      height: 'auto',
      width: '70%'
    }
  },
  textDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 280,
    height: 80
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
  bottomDiv: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #000',
    justifyContent: 'center',
    margin: 20,
    flexWrap: 'wrap'
  }
}))
export default useStyles

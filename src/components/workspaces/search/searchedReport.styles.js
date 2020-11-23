import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    border: '1px solid #fff',
    minWidth: 100,
    height: 300,
    margin: 20
  },
  titleGrid: {
    width: '100%',
    height: 50,
    marginBottom: 5,
    padding: 10,
    borderBottom: '1px solid black'
  },
  textGrid: { padding: 10, flex: 1 }
}))
export default useStyles

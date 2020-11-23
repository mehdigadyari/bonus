/* eslint-disable no-console */
/* eslint-disable react/no-children-prop */
import React, { useState, useContext } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Profile from '../workspaces/profile/profile'
import Report from '../workspaces/report/report'
import Search from '../workspaces/search/search'
import useStyles from './drawer.styles'
import theme from '../../theme/theme'
import bonusImg from '../../assets/images/bonus.png'
import { AuthenticateContext } from '../../contexts/AuthnticateContext'
import { TimeContext } from '../../contexts/TimeContext'
import { AlertContext } from '../../contexts/Alert/AlertContext'

import { LOGOUT, LOGOUT_TIME } from '../../constants/ActionTypes'

export default function ResponsiveDrawer(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [page, setPage] = useState(0)

  const classes = useStyles(page)
  const history = useHistory()
  const { dispatchA } = useContext(AuthenticateContext)
  const { state, dispatchT } = useContext(TimeContext)
  const { showErrorAlert, showSuccessAlert } = useContext(AlertContext)
  const exit = () => {
    if (new Date().getTime() - state.logInTime > 1000 * 60 * 10) {
      dispatchT({ type: LOGOUT_TIME })
      dispatchA({ type: LOGOUT })
      showSuccessAlert('ثبت خروج با موفقیت انجام شد')
      setTimeout(() => {
        history.push('/')
      }, 3000)
    } else {
      showErrorAlert(
        ' هنوز از ورود شما کمتر از 10 دقیقه گذشته است! نمی توانید ثبت خروج کنید'
      )
    }
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(new Date().getTime())
  //   }, 1000)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // })

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <>
      <div className={classes.topDrawer}>
        <img src={bonusImg} alt=" bonus" className={classes.profileImage} />
      </div>
      <div className={classes.centerDrawer}>
        <List style={{ width: '100%' }}>
          <ListItem
            button
            className={page === 0 ? null : 'listItem'}
            style={{
              backgroundColor:
                page === 0 ? theme.palette.colors.menubutton : 'transparent',
              paddingLeft: 0,
              paddingRight: 0
            }}
            onClick={() => {
              setPage(0)
              setMobileOpen(false)
            }}
          >
            <ListItemText
              disableTypography
              children={
                <Typography
                  style={{
                    color:
                      page === 0
                        ? theme.palette.colors.menu
                        : theme.palette.colors.menubutton
                  }}
                  className={classes.typography}
                  variant="body2"
                >
                  خانه
                </Typography>
              }
            />
            <div className="overlay" />
          </ListItem>
          <ListItem
            button
            className={page === 1 ? null : 'listItem'}
            style={{
              backgroundColor:
                page === 1 ? theme.palette.colors.menubutton : 'transparent',
              paddingLeft: 0,
              paddingRight: 0
            }}
            onClick={() => {
              setPage(1)
              setMobileOpen(false)
            }}
          >
            <ListItemText
              disableTypography
              children={
                <Typography
                  className={classes.typography}
                  style={{
                    color:
                      page === 1
                        ? theme.palette.colors.menu
                        : theme.palette.colors.menubutton
                  }}
                  variant="body2"
                >
                  گزارشات
                </Typography>
              }
            />
            <div className="overlay" />
          </ListItem>
          <ListItem
            button
            className={page === 2 ? null : 'listItem'}
            style={{
              backgroundColor:
                page === 2 ? theme.palette.colors.menubutton : 'transparent',
              paddingLeft: 0,
              paddingRight: 0
            }}
            onClick={() => {
              setPage(2)
              setMobileOpen(false)
            }}
          >
            <ListItemText
              disableTypography
              children={
                <Typography
                  className={classes.typography}
                  style={{
                    color:
                      page === 2
                        ? theme.palette.colors.menu
                        : theme.palette.colors.menubutton
                  }}
                  variant="body2"
                >
                  جستجو
                </Typography>
              }
            />
            <div className="overlay" />
          </ListItem>
        </List>
      </div>
      <div className={classes.buttomDrawer}>
        <Button onClick={exit}>
          <Typography>خروج</Typography>
        </Button>
      </div>
    </>
  )
  const getPage = () => {
    switch (page) {
      case 0:
        return <Profile />

      case 1:
        return <Report />

      case 2:
        return <Search />

      default:
        return <Profile />
    }
  }

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{getPage()}</main>
    </div>
  )
}

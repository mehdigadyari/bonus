import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/home/home'
import Workspace from '../screens/workspace/workspace'

export default function Index() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/workspace">
        <Workspace />
      </Route>
    </Switch>
  )
}

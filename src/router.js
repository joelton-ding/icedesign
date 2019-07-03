/**
 * 定义应用路由
 */
import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

// 按照 Layout 分组路由
// UserLayout 对应的路由：/user/xxx
const router = () => {
  return(
    <HashRouter>
      <Switch>
        <Route path="/user" component={UserLayout} />
      </Switch>
    </HashRouter>
  )
}

export default router()
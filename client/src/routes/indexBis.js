import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Items from '../pages/Items'
import Home from '../pages/Home'
import Share from '../pages/Share'
import Profile from '../pages/Profile'
import HeaderBar from '../components/HeaderBar'
import { ViewerContext } from '../context/ViewerProvider'

export default () => (
  <ViewerContext.Consumer>
    {({ loading, viewer, error }) => {
      console.log('THIS IS THE VIEWER', viewer)
      if (loading) return ''
      if (!viewer) {
        return (
          <Switch>
            <Route exact path="/welcome" component={Home} />
            <Redirect from="*" to="/welcome" />
          </Switch>
        )
      }
      return (
        <Fragment>
          <HeaderBar />
          <Switch>
            <Route exact path="/items" component={Items} />
            <Route exact path="/share" component={Share} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/:id" component={Profile} />
            <Redirect to="/items" />
          </Switch>
        </Fragment>
      )
    }}
  </ViewerContext.Consumer>
)

{
  /* @TODO: Add your menu component here */
}

{
  /**
   * @TODO: Define routes here for: /items, /profile, /profile/:userid, and /share
   *
   * Provide a wildcard redirect to /items for any undefined route using <Redirect />.
   *
   * Later, we'll add logic to send users to one set of routes if they're logged in,
   * or only view the /welcome page if they are not.
   */
}

//     <Fragment>
//       {/* @TODO: Add your menu component here */}

//       <HeaderBar />

//       <Switch>
//         {/**
//          * @TODO: Define routes here for: /items, /profile, /profile/:userid, and /share
//          *
//          * Provide a wildcard redirect to /items for any undefined route using <Redirect />.
//          *
//          * Later, we'll add logic to send users to one set of routes if they're logged in,
//          * or only view the /welcome page if they are not.
//          */}

//         <Route exact path="/welcome" component={Home} />
//         <Route exact path="/" component={Home} />
//         <Route path="/items" component={Items} />
//         <Route path="/Share" component={Share} />
//         <Route path="/profile" component={Profile} />
//         <Route path="/profile/:id" component={Profile} />
//         <Redirect to="/items" />
//       </Switch>
//     </Fragment>
//   </ViewerContext.Consumer>
// )

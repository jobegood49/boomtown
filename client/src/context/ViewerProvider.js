import { Query } from 'react-apollo'
import React, { Fragment } from 'react'

import { VIEWER_QUERY } from '../apollo/queries'

export const ViewerContext = React.createContext()

// export const ViewerProvider = ({ children }) => {
//   /**
//    * @TODO: Create the ViewerContext provider to supply information about
//    * the currently logged-in user throughout the application.
//    *
//    * Replace the <Fragment /> component with an Apollo <Query /> component
//    * with a <ViewerContext.Provider /> nested inside that wrap the children.
//    */
//   return <Fragment>{children}</Fragment>
// }

export const ViewerProvider = ({ children }) => (
  <Query query={VIEWER_QUERY}>
    {({ data: { viewer }, loading, error }) => {
      console.log('in the viewer context', viewer)
      return (
        <ViewerContext.Provider value={{ viewer, loading, error }}>
          {children}
        </ViewerContext.Provider>
      )
    }}
  </Query>
)

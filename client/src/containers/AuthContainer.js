import { adopt } from 'react-adopt'
import { Mutation } from 'react-apollo'
import React from 'react'

import client from '../apollo'

import {
  VIEWER_QUERY,
  LOGIN_MUTATION,
  LOGOUT_MUTATION,
  SIGNUP_MUTATION
} from '../apollo/queries'

const signup = ({ render }) => {
  /**
   * @TODO: Use Apollo's <Mutation /> component to use the signup mutation.
   */
  return (
    <Mutation
      mutation={SIGNUP_MUTATION}
      refetchQueries={result => [{ query: VIEWER_QUERY }]}
    >
      {(mutation, data, loading, error) =>
        render({ mutation, data, loading, error })
      }
    </Mutation>
  );
};

const login = ({ render }) => {
  /**
   * @TODO: Use Apollo's <Mutation /> component to use the login mutation.
   */
  return (
    <Mutation
      mutation={LOGIN_MUTATION}
      refetchQueries={result => [{ query: VIEWER_QUERY }]}
    >
      {(mutation, { data, loading, error }) =>
        render({ mutation, data, loading, error })
      }
    </Mutation>
  );
};

const logout = ({ render }) => {
  /**
   * @TODO: Use Apollo's <Mutation /> component to use the logout mutation.
   */
  return (
    <Mutation mutation={LOGOUT_MUTATION}>
      {(mutation, { data, loading, error }) =>
      
        render({ mutation, data, loading, error })
      }
    </Mutation>
  );
};

const AuthContainer = adopt({
  // @TODO: Uncomment each line as you write the corresponding query.
  signup,
  login,
  logout
  // -------------------------------
});

export default AuthContainer;
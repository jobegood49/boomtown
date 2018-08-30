import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { Form, Field } from 'react-final-form'
import AuthContainer from '../../containers/AuthContainer'
/**
 * @TODO: Uncomment the following lines when authentication is added to the form
 *

//  *
//  * 
 * import validate from './helpers/validation'
 */

import styles from './styles'

class AccountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formToggle: true
    }
  }

  render() {
    const { classes } = this.props
    return (
      <AuthContainer>
        {({ login, signup, data, loading, error }) => {
          if (loading) {
            return 'loading...'
          }
          if (error) {
            return 'error'
          }
          return (
            <Form
              onSubmit={
                this.state.formToggle
                  ? values => login.mutation({ variables: { user: values } })
                  : values => signup.mutation({ variables: { user: values } })
              }
              initialValues={{}}
              render={({
                mutation,
                handleSubmit,
                submitting,
                pristine,
                values
              }) => (
                <form onSubmit={handleSubmit} className={classes.accountForm}>
                  {!this.state.formToggle && (
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="fullname">Username</InputLabel>
                      <Field name="fullname">
                        {({ input, meta }) => (
                          <Input
                            id="fullname"
                            type="text"
                            inputProps={{
                              autoComplete: 'off'
                            }}
                            {...input}
                          />
                        )}
                      </Field>
                    </FormControl>
                  )}
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Field name="email">
                      {({ input, meta }) => (
                        <Input
                          id="email"
                          type="text"
                          // inputProps={{
                          //   autoComplete: 'off'
                          // }}
                          {...input}
                        />
                      )}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Field name="password">
                      {({ input, meta }) => (
                        <Input
                          id="password"
                          type="password"
                          // inputProps={{
                          //   autoComplete: 'off'
                          // }}
                          {...input}
                        />
                      )}
                    </Field>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Button
                        type="submit"
                        className={classes.formButton}
                        variant="contained"
                        size="large"
                        color="secondary"
                        disabled={
                          false // @TODO: This prop should depend on pristine or valid state of form
                        }
                      >
                        {this.state.formToggle ? 'Enter' : 'Create Account'}
                      </Button>
                      <Typography>
                        <button
                          className={classes.formToggle}
                          type="button"
                          onClick={() => {
                            // @TODO: Reset the form on submit
                            this.setState({
                              formToggle: !this.state.formToggle
                            })
                          }}
                        >
                          {this.state.formToggle
                            ? 'Create an account.'
                            : 'Login to existing account.'}
                        </button>
                      </Typography>
                    </Grid>
                  </FormControl>
                  <Typography className={classes.errorMessage}>
                    {/* @TODO: Display sign-up and login errors */}
                  </Typography>
                </form>
              )}
            />
          )
        }}
      </AuthContainer>
      // @TODO: Close Final Form <Form />
      // @TODO: Close <AuthContainer />
    )
  }
}

export default withStyles(styles)(AccountForm)

import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AuthContainer from '../../containers/AuthContainer'
import client from '../../apollo'
import { Link } from 'react-router-dom'


const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class MenuButton extends Component {
  state = {
    anchorEl: null
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }
  render() {
    const { anchorEl } = this.state

    const open = Boolean(anchorEl)

    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} component={Link} to="/profile">
            Your Profile
          </MenuItem>

          <AuthContainer>
            {({ logout }) => {
              return (
                <MenuItem
                  onClick={() => {
                    console.log('logout button hit')
                    logout.mutation().then(() => client.resetStore())
                  }}
                >
                  Sign Out
                </MenuItem>
              )
            }}
          </AuthContainer>
        </Menu>
      </div>
    )
  }
}

export default MenuButton

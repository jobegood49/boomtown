import { withStyles } from '@material-ui/core/styles'
import React from 'react'

import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Logo from '../../images/boomtown.svg'
import AddIcon from '@material-ui/icons/AddCircle'
import { Link } from 'react-router-dom'
import ShareButton from '../ShareButton'

import styles from './styles'

const HeaderBar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <img src={Logo} alt="Boomtown Logo" className={classes.logo} />
          </Link>
          <ShareButton />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(HeaderBar)

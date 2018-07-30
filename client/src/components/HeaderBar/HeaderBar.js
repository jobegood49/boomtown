import { withStyles } from '@material-ui/core/styles'
import React from 'react'

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../images/boomtown.svg'
import AddIcon from '@material-ui/icons/AddCircle'



import styles from './styles'

const HeaderBar = ({ classes }) => {
  return (

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <img src={Logo} alt="" className={classes.logo} />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
          </Typography>
          <IconButton>
            <AddIcon style={{ marginRight: '10px' }} /> Share Something
          </IconButton>
          <Button color="inherit" style={{ marginLeft: '20px' }}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    
  )
}

export default withStyles(styles)(HeaderBar)
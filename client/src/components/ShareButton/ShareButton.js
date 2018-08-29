import React from 'react'
import styles from './styles'
import AddIcon from '@material-ui/icons/Add'

import { withStyles, Button } from '@material-ui/core'

const ShareButton = ({ classes }) => {
  return (
    <div>
      <Button
        variant="fab"
        color="primary"
        aria-label="Add"
        className={classes.button}
      >
        <AddIcon className={classes.addButton} />
        Share Something
      </Button>
    </div>
  )
}

export default withStyles(styles)(ShareButton)

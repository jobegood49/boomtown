import { withStyles } from '@material-ui/core/styles'
import React from 'react'

import styles from './styles'

import ItemCard from '../../components/ItemCard'
import ShareItemForm from '../../components/ShareItemForm'
import ShareItemPreview from '../../components/ShareItemPreview'

const Share = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.sharePreview}>
        <ShareItemPreview />
      </div>
      <div className={classes.shareForm}>
        <ShareItemForm  />
      </div>
    </div>
  )
}

export default withStyles(styles)(Share)

import { withStyles } from '@material-ui/core/styles'
import React from 'react'

import styles from './styles'

import ItemCard from '../../components/ItemCard'
import ShareItemForm from '../../components/ShareItemForm'
import ShareItemPreview from '../../components/ShareItemPreview'


const Share = ({ classes }) => {
  return (
    <div>
      <p>
        This is the share page located at <code>/share</code>.
      </p>
      {/* <ItemCard></ItemCard> */}
      <ShareItemPreview />
      <ShareItemForm />

    </div>
  )
}

export default withStyles(styles)(Share)

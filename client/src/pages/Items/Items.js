import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ItemsContainer from '../../containers/ItemsContainer'
import ItemCard from '../../components/ItemCard'

import Grid from '@material-ui/core/Grid'

import styles from './styles'

const Items = ({ classes }) => {
  return (
    <div>
      <Grid container align="center" justify="center" className={classes.root}>
        <ItemsContainer>
          {({ itemsData: { loading, error, data } }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`
            return data.items.map(item => (
              <Grid key={item.id} item xs={12} md={6} lg={4} className={classes.itemCard}>
                <ItemCard item={item} />
              </Grid>
            ))
          }}
        </ItemsContainer>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Items)

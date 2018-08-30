import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ItemsContainer from '../../containers/ItemsContainer'
import Grid from '@material-ui/core/Grid'
import ItemCard from '../../components/ItemCard'



import styles from './styles'

const Profile = ({ classes }) => {
  return (
    <div>
      <Grid container align="center" justify="center" className={classes.root}>
        <ItemsContainer>
          {({ userItemsData: { user, loading } }) => {
            if (loading) return 'Loading...'
            // if (error) return `Error! ${error.message}`
            return user.items.map(item => (
              <Grid
                key={item.id}
                item
                xs={12}
                md={6}
                lg={4}
                className={classes.itemCard}
              >
                <ItemCard item={item} />
              </Grid>
            ))
          }}
        </ItemsContainer>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Profile)

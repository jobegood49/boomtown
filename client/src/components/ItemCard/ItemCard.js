import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import Gravatar from 'react-gravatar'
import {
  withStyles,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardHeader
} from '@material-ui/core'

const ItemCard = ({ classes, item }) => {
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={item.imageurl} />
        <CardHeader
          avatar={
            <Gravatar className={classes.avatar} email={item.itemowner.email} className={classes.avatar}/>
          }
          title={item.itemowner.fullname}
          subheader="time waits for no one"
          className={classes.header}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="headline" component="h2">
            {item.title}
          </Typography>
          <Typography component="p">{item.description}</Typography>
        </CardContent>
        <Typography component="p" variant="caption">
          {item.tags.map(tag => tag.title).join(', ')}
        </Typography>

        <CardActions>
          <Button size="small" color="primary">
            Borrow
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default withStyles(styles)(ItemCard)

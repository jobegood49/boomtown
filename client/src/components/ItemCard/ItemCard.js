import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import Gravatar from 'react-gravatar';


const ItemCard = ({ classes, item }) => {
  const itemTags = item.tags.map(tag => tag.title)

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://dummyimage.com/350x250/f9a825/000000&text=select+your+image+"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {item.title}
          </Typography>
          <Typography component="p">{item.description}</Typography>
        </CardContent>
        <Typography component="p" variant="caption">
            {itemTags.join(', ')}
        </Typography>       
        <Gravatar email="" size={100} rating="pg" default="monsterid" className="CustomAvatar-image" />
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


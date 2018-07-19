import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ItemsContainer from '../../containers/ItemsContainer'

import styles from './styles'

const Items = ({ classes }) => {
  return (
    <div>
      <ItemsContainer>
        {
          ({itemsData: {loading, error, data}}) => {
            
              if(loading) return 'Loading...'
              if(error) return `Error! ${error.message}`
              return (
                data.items.map(item => {
                  return <div>{item.title}</div>
                })
              
            )
          }
        }
      </ItemsContainer>
    </div>
  )
}

export default withStyles(styles)(Items)

// const styles = theme => ({})

// export default styles

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
    
  },
  shareForm: {
    

    width: '50%',
    maxWidth: '500px',
    marginTop: '100px',
  },
  sharePreview: {
  
    width: '50%',
    maxWidth: '500px'


  }
  // root: {
  //   flexGrow: 1,
  //   height: '100%',
  //   background: theme.palette.primary.main,
  //   padding: theme.spacing.unit * 5,
  //   [theme.breakpoints.up('md')]: {
  //     padding: theme.spacing.unit * 20
  //   }
  // },
  // headline: {
  //   fontWeight: 700,
  //   color: theme.palette.text.primary,
  //   fontSize: theme.typography.display3.fontSize,
  //   [theme.breakpoints.up('md')]: {
  //     fontSize: theme.typography.display4.fontSize
  //   }
  // },
  // subheading: {
  //   fontWeight: 400,
  //   color: 'white'
  // }
})

export default styles

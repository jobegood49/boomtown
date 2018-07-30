// import React, { Component } from 'react'

// class ShareForm extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }

//   render() {
//     return (
//       <div>
//         <p>This is the share form.</p>
//       </div>
//     )
//   }
// }

// export default ShareForm


import React from 'react';
import ItemCard from '../ItemCard';
import { connect } from 'react-redux';

const ShareItemPreview = props => {
  return <ItemCard item={props.shareItemPreview} />;
};

const mapStateToProps = state => {
  return {
    shareItemPreview: state.shareItemPreview
  };
};

export default connect(mapStateToProps)(ShareItemPreview);
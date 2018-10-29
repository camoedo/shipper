import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Shipments extends Component {
  render() {
    return (
      <div>
        <p>Shipments</p>
      </div>
    );
  }
}

export default withRouter(connect()(Shipments))
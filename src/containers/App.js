import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { NavLink, Route } from 'react-router-dom'
import { showMessage } from '../actions'

import Shipments from './Shipments'

import Button from '../components/Button'

class App extends Component {
  render() {
    const { message, showMessage } = this.props
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/shipments'>Shipments</NavLink>
        <p>
          <Button active={false} onClick={() => showMessage('Hola Mundo!')} >
            Get a quote
          </Button>
        </p>
        <p>{ message }</p>

        <Route path="/shipments" component={Shipments}/>
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Redux
  message: PropTypes.string,
  showMessage: PropTypes.func.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

const mapStateToProps = state => ({
  message: state.message
})

export default withRouter(connect(mapStateToProps, { showMessage })(App))

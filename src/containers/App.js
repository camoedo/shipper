import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { showMessage } from '../actions'

import Button from '../components/Button'

class App extends Component {
  render() {
    const { message, showMessage } = this.props
    return (
      <div>
        <Link to='/'>Home</Link>
        <p>
          <Button active={false} onClick={() => showMessage('Hola Mundo!')} >
            Show Message
          </Button>
        </p>
        <p>{ message }</p>
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

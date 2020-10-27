import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import * as tokens from './axios/base-axios'
import Layout from './Container/Layout/Layout'
import Detail from './Container/BookDetail/Detail'
import SignIn from './Container/SignIn/Signin'
import SignUp from './Container/SignUp/SignUp'
import SellBook from './Container/SellBook/SellBook'
import * as action from './Store/actions/auth'
import Logout from './Container/Logout/Logout'

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Layout} />
            <Route path="/login" exact component={SignIn} />
            <Route path="/logout" exact component={Logout} />
            {/* <Route path="/sell-your-book" exact component={SellBook} /> */}
            <Route path="/sell-your-book" exact component={SellBook} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/book/:id" component={Detail} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticate: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(action.checkAuthState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

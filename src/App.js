import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from './Component/Layout/Layout' 
import Detail from './Component/Detail/Detail'
import SignIn from './Component/SignIn/Signin'
import SignUp from './Component/SignUp/SignUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Layout} />
          <Route path="/login" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/book/:id" component={Detail} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App

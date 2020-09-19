import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from './Container/Layout/Layout' 
import Detail from './Container/BookDetail/Detail'
import SignIn from './Container/SignIn/Signin'
import SignUp from './Container/SignUp/SignUp'

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

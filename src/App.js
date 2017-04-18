import React, { Component } from 'react'
import './App.css'
/*
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
*/
// import PlaidLink from './PlaidLink.js'
import UserAuth from './UserAuth.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        {/* <PlaidLink /> */}
        <UserAuth />
      </div>
    )
  }
}

export default App

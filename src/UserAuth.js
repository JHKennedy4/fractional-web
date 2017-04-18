import React, { Component } from 'react'
import { parse, asYouType as AsYouType } from 'libphonenumber-js'
import Http from './http.js'

const formatter = new AsYouType()
const root = 'localhost:8170'
const http = new Http(root)

class ViewerAuth extends Component {
  handleChange () {
    // format the phone number
    // submit the phone number
    this.setState({
      phone: formatter.format(this.state.phone)
    })
  }

  submitPhoneNumber () {
    http.get('auth', {
      number: parse(this.state.phone)
    })
  }

  render () {
    return (
      <div class='Auth'>
        <label for='phone-number'>Login or create account with your phone number</label>
        <input id='phone-number' type='phone-number' name='phone-number' value='{this.state.phone}' onChange='{this.handleChange}' placeholder='(585) 555-5555' />
        <button type='submit' onClick='{submitPhoneNumer}'>Send Confirmation</button>
      </div>
    )
  }
}

export default ViewerAuth

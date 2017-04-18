import React, { Component } from 'react'
import lib from './lib.js'

let store = {}

class PlaidLink extends Component {
  componentWillMount () {
    console.log(window.Plaid)
    this.linkHandler = window.Plaid.create({
      env: 'sandbox',
      apiVersion: 'v2',
      clientName: 'Plaid Sandbox',
      key: '51a4fe26b443e84df772e2fd56c02a',
      product: ['auth', 'transactions'],
      onSuccess: function (publicToken, metadata) {
        // Send the public_token to your app server here.
        // The metadata object contains info about the
        // institution the user selected and the
        // account_id, if selectAccount is enabled.
        console.log(publicToken)
        console.log(metadata)
        lib.authenticate(publicToken)
        .then((response) => {
          console.log('Authenticate')
          console.log(response)
          store.accessToken = response.accessToken

          return lib.getAuth(store.accessToken)
        })
        .then((response) => {
          console.log('Get Auth')
          console.log(response)
          return lib.transactions(store.accessToken)
        })
        .then((response) => {
          console.log('Transactions')
          console.log(response)
          return lib.balance(store.accessToken)
        })
        .then((response) => {
          console.log('Balance')
          console.log(response)
          return lib.income(store.accessToken)
        })
        .then((response) => {
          console.log('Income')
          console.log(response)
          return lib.identity(store.accessToken)
        })
        .then((response) => {
          console.log('Identity')
          console.log(response)
        })
      },
      onExit: function (err, metadata) {
        // The user exited the Link flow.
        if (err != null) {
          // The user encountered a Plaid API error
          // prior to exiting.
        }
        // metadata contains information about the
        // institution that the user selected and the
        // most recent API request IDs. Storing this
        // information can be helpful for support.
        // TODO: store metadata
      }
    })
  }

  render () {
    return (
      <button onClick={() => { this.linkHandler.open() }} id='link-button'>Open Link</button>
    )
  }
}

export default PlaidLink

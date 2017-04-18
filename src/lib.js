import moment from 'moment'
import Http from './http.js'
const root = 'http://localhost:8170'
const http = new Http(root)

class Lib {
  authenticate (publicToken) {
    return http.get('authenticate', {
      public_token: publicToken
    })
  }

  getAuth (accessToken) {
    return http.get('get-auth', {
      access_token: accessToken
    })
  }

  transactions (accessToken) {
    return http.get('transactions', {
      start_date: moment().subtract(30, 'days').format('YYYY-MM-DD'),
      end_date: moment().format('YYYY-MM-DD'),
      count: 250,
      offset: 0,
      access_token: accessToken
    })
  }

  balance (accessToken) {
    return http.get('balance', {
      access_token: accessToken
    })
  }

  income (accessToken) {
    return http.get('income', {
      access_token: accessToken
    })
  }

  identity (accessToken) {
    return http.get('identity', {
      access_token: accessToken
    })
  }
}

export default new Lib()

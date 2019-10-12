//file comes from https://suncoast.io/handbook/resources/dotnet/add-auth0-to-react-dotnet-app/

import auth0 from 'auth0-js'
import history from '../History'
import axios from 'axios'

//must change domain and client_ID found in app settings on Auth0 website
const DOMAIN = 'dev-ykk47an3.auth0.com'
const CLIENT_ID = '2ZRJXwAhHPpPHBAEPL06IF9Ri4Hyxy59'

class Auth {
  userProfile

  auth0 = new auth0.WebAuth({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    redirectUri: `${window.location.protocol}//${window.location.host}/callback`,
    responseType: 'token id_token',
    scope: 'openid email profile'
  })

  constructor() {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  login() {
    this.auth0.authorize()
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    // navigate to the home route
    history.replace('/')
  }

  handleAuthentication(callback) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        axios
          .get('/api/Users/check', {
            headers: {
              Authorization: this.auth0.authorizationHeader()
            }
          })
          .then(resp => {
            console.log({ resp })
            // if not then create
            if (!resp.data.exists) {
              axios
                .post(
                  '/api/Users',
                  {
                    userID: authResult.accessToken
                  },
                  {
                    headers: {
                      Authorization: this.auth0.authorizationHeader()
                    }
                  }
                )
                .then(resp => {
                  console.log({ resp })
                  if (callback) {
                    callback()
                  }
                  history.replace('/')
                })
            } else {
              if (callback) {
                callback()
              }
              history.replace('/')
            }
          })
      } else if (err) {
        history.replace('/')
        console.log(err)
      }
    })
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  getIdToken() {
    const idToken = localStorage.getItem('id_token')
    if (!idToken) {
      throw new Error('No ID Token found')
    }
    return idToken
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
      throw new Error('No Access Token found')
    }
    return accessToken
  }

  //...
  getProfile(cb) {
    let accessToken = this.getAccessToken()
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile
      }
      cb(err, profile)
    })
  }

  authorizationHeader() {
    return `Bearer ${this.getIdToken()}`
  }
}

const auth = new Auth()

export default auth

// a library to wrap and simplify api calls
import apisauce from 'apisauce'

import AppConfig from '../Config/AppConfig'

// our "constructor"
const create = (baseURL = AppConfig.baseApiUrl) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json'
    },
    // 60 second timeout...
    timeout: 60000,
    params: {
      key: AppConfig.apiKey,
      hideuserinfo: ''
    }
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const authUser = (email, password) => api.get('oatncxmy', {email, password} )
  const getMomentList = (results = 10) => api.get('bs3d7pw3', {results})

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    setHeader: api.setHeader,
    authUser,
    getMomentList
  }
}

// let's return back our create method as the default.
export default {
  create
}

import {createActions, createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  authUser: ['email', 'password'],
  authUserSuccess: ['response'],
  authUserFailure: ['response']
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  token: null,
  error: null,
})

/* ------------- Reducers ------------- */

export const authUser = (state) => state.merge({fetching: true})

export const authUserSuccess = (state, {response}) => {
  const {results} = response.data
  const token = results[0].token
  return state.merge({fetching: false, error: null, token})
}

export const authUserFailure = (state, {response}) => state.merge({fetching: false, error: response, token: null})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_USER]: authUser,
  [Types.AUTH_USER_SUCCESS]: authUserSuccess,
  [Types.AUTH_USER_FAILURE]: authUserFailure
})

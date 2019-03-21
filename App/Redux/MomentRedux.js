import {createActions, createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  getMomentList: null,
  resetMomentList: null,
  getMomentListSuccess: ['response'],
  getMomentListFailure: ['response'],
  selectMoment: ['moment']
})

export const MomentTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  list: [],
  selected: null
})

/* ------------- Reducers ------------- */

export const getMomentList = (state) => state.merge({fetching: true})

export const resetMomentList = (state) => state.merge({list: []})

export const getMomentListSuccess = (state, {response}) => {
  const {results} = response.data

  return state.merge({fetching: false, error: null, list: results})
}

export const getMomentListFailure = (state, {response}) => state.merge({fetching: false, error: response})

export const selectMoment = (state, {moment}) => state.merge({selected: moment})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_MOMENT_LIST]: getMomentList,
  [Types.RESET_MOMENT_LIST]: resetMomentList,
  [Types.GET_MOMENT_LIST_SUCCESS]: getMomentListSuccess,
  [Types.GET_MOMENT_LIST_FAILURE]: getMomentListFailure,
  [Types.SELECT_MOMENT]: selectMoment
})

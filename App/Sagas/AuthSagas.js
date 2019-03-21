import { call, put, select } from 'redux-saga/effects'
import AuthActions from '../Redux/AuthRedux'

export function * authUser (api, {email, password}) {
  const response = yield call(api.authUser, email, password)
  if (response.ok === true) {
    yield put(AuthActions.authUserSuccess(response))
  } else {
    yield put(AuthActions.authUserFailure(response))
  }
}

export function * authUserSuccess (api, {response}) {
  const {results} = response.data
  api.setHeader('Authorization', 'Bearer ' + results[0].token)
}

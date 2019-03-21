import { call, put, select } from 'redux-saga/effects'
import MomentActions from '../Redux/MomentRedux'

export function * getMomentList (api) {
  const response = yield call(api.getMomentList)
  if (response.ok === true) {
    yield put(MomentActions.getMomentListSuccess(response))
  } else {
    yield put(MomentActions.getMomentListFailure(response))
  }
}

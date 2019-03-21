import {put, select} from "redux-saga/effects";
import StartupActions from "../Redux/StartupRedux";


export function * startup () {
  yield put(StartupActions.startupSuccess())
}


export function * startupSuccess(api) {
  const token = yield select((state) => state.auth.token)

  if (token !== null) {
    api.setHeader('Authorization', 'Bearer ' + token)
  }
}

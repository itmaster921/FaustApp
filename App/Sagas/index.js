import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { AuthTypes } from '../Redux/AuthRedux'
import {MomentTypes} from "../Redux/MomentRedux";

/* ------------- Sagas ------------- */

import { startup, startupSuccess } from './StartupSagas'
import {authUser, authUserSuccess} from "./AuthSagas";
import {getMomentList} from "./MomentSagas";

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(StartupTypes.STARTUP_SUCCESS, startupSuccess, api),
    takeLatest(AuthTypes.AUTH_USER, authUser, api),
    takeLatest(AuthTypes.AUTH_USER_SUCCESS, authUserSuccess, api),
    takeLatest(MomentTypes.GET_MOMENT_LIST, getMomentList, api),
  ]
}

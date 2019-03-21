import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    startup: require('./StartupRedux').reducer,
    auth: require('./AuthRedux').reducer,
    moment: require('./MomentRedux').reducer,
  })

  return configureStore(rootReducer, rootSaga)
}

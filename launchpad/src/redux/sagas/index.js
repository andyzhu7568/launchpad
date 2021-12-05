import { all } from 'redux-saga/effects'

import postalcodeSagas from './postalcodeSagas';
import postSaga from './postSaga'
import universitiesSagas from './universitiesSagas';
import countriesSagas from './countriesSagas';

export default function* rootSaga() {
  yield all([
    universitiesSagas(),
    countriesSagas(),
    postSaga(),
    postalcodeSagas(),

  ])
}
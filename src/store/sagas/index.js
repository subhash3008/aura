import {all} from "redux-saga/effects"
import homepageSaga from '../sagas/homepageSaga'

export default function* rootSaga() {
    yield all([homepageSaga(),]);
  }

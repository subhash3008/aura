import { call, put, takeEvery, all } from 'redux-saga/effects';

import * as types from '../types';
import _api from '../../services/api';
import URLS from '../../services/urls';
import { homepage } from '../actions';

function* loginWorker(params) {
    try {
        const data = yield call(_api, URLS.requestLogin, params, 'POST');
        yield put(homepage.successLogin(data));
    } catch (e) {
        console.error(e);
        yield put(homepage.failureLogin(e));
    }
}

function* signupWorker(params) {
    try {
        const data = yield call(_api, URLS.requestSignup, params, 'POST');
        yield put(homepage.successSignup(data));
    } catch (e) {
        console.error(e);
        yield put(homepage.failureSignup(e));
    }

}

function* loginWatcher() {
    yield takeEvery(types.REQUEST_LOGIN, loginWorker);
}

function* signupWatcher() {
    yield takeEvery(types.REQUEST_SIGNUP, signupWorker);
}

export default function* homepageSaga() {
    yield all([
        loginWatcher(),
        signupWatcher()
    ]);
}
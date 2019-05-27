import { call, put } from 'redux-saga/effects';
import request from '../requests/index';

export function* getPartnerAction(action) {
  try {
    let response = yield call(request.getPartnerFocus, action.payload);
    console.log(response);
    yield put({ type: 'partner_success', payload: response }); 
  } catch (err) {
    yield put({ type: 'partner_err', err });
  }
}
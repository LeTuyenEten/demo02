import { fork, all, takeLatest, take } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import { getGeocodeAction, getWeatherAction, getTokenAction } from './headerSaga';
import { getPartnerAction } from './partnerSaga'

const sagas = function*() {
  yield all([takeLatest('HANDLE_LOGIN', loginSaga)]);
  yield all([takeLatest('Geocode', getGeocodeAction)]);
  yield all([takeLatest('weather', getWeatherAction)]);
  yield all([takeLatest('Token', getTokenAction)]);
  yield all([takeLatest('partner', getPartnerAction)]);
};
export default sagas;
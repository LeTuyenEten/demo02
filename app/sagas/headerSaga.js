import { call, put } from 'redux-saga/effects';
import request from '../requests/index';
// function* saveTokenToStore(data) {
//   yield AsyncStorage.setItem('Token', data);
// }


export function* getGeocodeAction(action) {
  try {
    let response = yield call(request.getGeocode, action.payload.lat, action.payload.lng);
    //console.log(response);
    yield put({ type: 'geocode_success', payload: response }); 
  } catch (err) {
    yield put({ type: 'geocode_err', err });
  }
}

export function* getWeatherAction(action) {
    try {
        let response = yield call(request.getWeather, action.payload.lat, action.payload.lng);
        //console.log(response);
        yield put({ type: 'weather_success', payload: response }); 
    } catch (err) {
        yield put({ type: 'weather_err', err });
    }
}

export function* getTokenAction(action) {
  try {
      let response = yield call(request.getToken, action.payload);
      //console.log(response);
      //yield call(saveTokenToStore, response); 
      yield put({ type: 'Token_success', payload: response }); 
  } catch (err) {
      yield put({ type: 'Token_err', err });
  }
}
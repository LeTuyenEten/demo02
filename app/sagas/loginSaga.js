import { call, put, select } from 'redux-saga/effects';
import { actionLogin } from '../actions/loginAction';
import request from '../requests/index';
import { AsyncStorage } from 'react-native';

function* saveTokenToStore(data) {
  yield AsyncStorage.multiSet(
    [['AccessToken', data.access_token], ['RefreshToken', data.refresh_token]],
    (err) => {
        if(err){
            console.log('ERROR saveTokenToStore: ', err);
        }
    },
  );
}

function* postLoginAction(username, password) {
  try {
    console.log(
      `Login Saga - postLoginAction: username: ${username} - password: ${password}`,
    );
    let response = yield call(request.login, username, password); 
    yield call(saveTokenToStore, response); 
    console.log('responseresponse ------------->', response);
    yield put({ type: 'LOGIN_SUCCESS', payload: response }); 
  } catch (err) {
    console.log('err  ------------->', err);
    yield put({ type: 'LOGIN_FAILURE', err });
  }
}

export default function*(action) {
  console.log('Login Saga - Action', action);
  yield call(postLoginAction, action.payload.username, action.payload.password);
}
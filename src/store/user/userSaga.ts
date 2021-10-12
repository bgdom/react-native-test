import { PayloadAction } from '@reduxjs/toolkit';
import {
  takeLeading,
  put,
  call,
} from 'redux-saga/effects';
import { UserData, UserRegister } from '../../models/useSliceData';
import { saveUser } from '../../service/api';
import { actions } from './userSlice';

function* handleRegisterUser(action: PayloadAction<UserRegister>) {
  const registerInfo = action.payload;

  try {    
    const result: UserData = yield call(saveUser, registerInfo)
    yield put(actions.userLoaded(result))
  } catch (error) {
    
  }
}

export function* userSaga() {
  yield takeLeading(actions.registerUser({} as any).type, handleRegisterUser)
}
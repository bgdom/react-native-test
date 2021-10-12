import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserData, UserRegister, UserState } from '../../models/useSliceData'

export const initialState: UserState = {}

export const userStateSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    userLoaded: (state, action: PayloadAction<UserData>) => {
      state.data = action.payload
    },
    disconnectUser: (state) => {
      state.data = undefined
    }
  }
})

const sagaActions = {
  registerUser: createAction<UserRegister>('userStateSlice/registerUser')
}

export const actions = {
  ...userStateSlice.actions,
  ...sagaActions,
};

export default userStateSlice.reducer
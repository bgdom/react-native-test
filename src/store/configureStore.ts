import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from 'redux'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import userReducer, { userStateSlice } from './user/userSlice'
import { userSaga } from './user/userSaga'
import createSagaMiddleware from 'redux-saga'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const reducers = combineReducers({
  [userStateSlice.name]: userReducer,
})
const persistedReducer = persistReducer(persistConfig, reducers)

// init saga
const sagaMiddleware = createSagaMiddleware({});

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = [sagaMiddleware,
      ...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
          thunk: false
      })
    ]

    middlewares.push(logger);

    return middlewares
  },
})

sagaMiddleware.run(userSaga)

const persistor = persistStore(store)

export { store, persistor }

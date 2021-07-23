import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { useDispatch } from 'react-redux'
import thunk from 'redux-thunk'

const _default = {
  state: {
    isAuthenticated: <Boolean>false,
    user: <Object>{
      id: Number,
      name: String,
      token: String,
      userImage: String,
      userImageUrl: String,
      userImageThumbnailUrl: String
    }
  }
}

const reducer = (state: any = _default, action: any) => {
  switch (action.type) {
    case 'AUTH_USER':
      return {
        ...state,
        state: {
          ...state.state,
          isAuthenticated: true,
          user: action.user
        }
      }
    case 'AUTH_USER_FAILED':
      return {
        ...state,
        state: {
          ...state.state,
          isAuthenticated: false,
          user: null
        }
      }
    case 'AUTH_USER_REQUEST':
      return {
        ...state,
        requests: [...state.requests, action.request]
      }
    case 'AUTH_USER_SUCCESS':
      return {
        ...state,
        requests: state.requests.filter(
          (request: any) => request.id !== action.request.id
        )
      }
    default:
      return state
  }
}

const reducers = combineReducers({
    auth: reducer
})

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export type AppDispatch = typeof store.dispatch
export type GetState = typeof store.getState
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types

export default store

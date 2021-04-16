import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Reducer from './Reducer'

const persistConfig = {
  key: 'root',
  storage
}


const persistedReducer = persistReducer(persistConfig, Reducer)

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}
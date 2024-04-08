import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  userReducer  from "./slices/userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import sliderSlice from "./slices/sliderSlice";

// const rootReducer = combineReducers({user:userReducer,slider:sliderSlice})

// const persistConfig = {
//   key:"root",
//   storage,
//   version:1
// }

// const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: {
    user:userReducer,
    slider:sliderSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// export const perisistor = persistStore(store)

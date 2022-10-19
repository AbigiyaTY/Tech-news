import { configureStore, combineReducers } from '@reduxjs/toolkit';
import newsReducer from './DetailNews/AllRed';

const Store = configureStore({
  reducer: combineReducers({
    news: newsReducer,
  }),
});

export default Store;

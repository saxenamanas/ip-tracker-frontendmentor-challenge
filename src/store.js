import { configureStore } from '@reduxjs/toolkit';
import setDataReducer from './redux/locationData';

export default configureStore({
  reducer: {
      data:setDataReducer
  },
})
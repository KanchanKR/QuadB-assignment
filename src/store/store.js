import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; 
import taskReducer from './taskSlice';
import themeReducer from './themeSlice'; 

export const store = configureStore({
  reducer: {
    auth: authReducer,  
    tasks: taskReducer,
    theme: themeReducer, 
  },
});

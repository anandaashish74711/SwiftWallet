import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Define your reducers here (e.g., user: userReducer)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
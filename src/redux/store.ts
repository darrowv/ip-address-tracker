import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import geoSlice from './geo.slice';

export const store = configureStore({
  reducer: { geo: geoSlice },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
import { configureStore } from '@reduxjs/toolkit'
import {
  shallowEqual,
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'
import homeReducer from './modules/home'
import entireReducer from './modules/entire'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer
  }
})

type RootState = ReturnType<typeof store.getState>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store

import { configureStore } from '@reduxjs/toolkit'
import {
  shallowEqual,
  useDispatch,
  useSelector,
  type TypedUseSelectorHook
} from 'react-redux'
import mainReducer from './modules/main'
import homeReducer from './modules/home'
import entireReducer from './modules/entire'
import detailReducer from './modules/detail'

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer
  }
})

type RootState = ReturnType<typeof store.getState>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store

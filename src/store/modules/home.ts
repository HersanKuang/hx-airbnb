import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData
} from '@/services'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchData',
  (_, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res))
    })
  }
)

type InitialState = {
  goodPriceInfo: any
  highScoreInfo: any
  discountInfo: any
}

const initialState: InitialState = {
  goodPriceInfo: {},
  highScoreInfo: {},
  discountInfo: {}
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction
} = homeSlice.actions
export default homeSlice.reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData
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
    getHomeHotRecommendData().then((res) => {
      dispatch(changeHotRecommendInfoAction(res))
    })
  }
)

type InitialState = {
  goodPriceInfo: any
  highScoreInfo: any
  discountInfo: any
  hotRecommendInfo: any
}

const initialState: InitialState = {
  goodPriceInfo: {},
  highScoreInfo: {},
  discountInfo: {},
  hotRecommendInfo: {}
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
    },
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload
    }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendInfoAction
} = homeSlice.actions
export default homeSlice.reducer

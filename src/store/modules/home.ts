import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomeLongForData
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
    getHomeLongForData().then((res) => {
      dispatch(changeLongForInfoAction(res))
    })
  }
)

type InitialState = {
  goodPriceInfo: any
  highScoreInfo: any
  discountInfo: any
  hotRecommendInfo: any
  longForInfo: any
}

const initialState: InitialState = {
  goodPriceInfo: {},
  highScoreInfo: {},
  discountInfo: {},
  hotRecommendInfo: {},
  longForInfo: {}
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
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload
    }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendInfoAction,
  changeLongForInfoAction
} = homeSlice.actions
export default homeSlice.reducer

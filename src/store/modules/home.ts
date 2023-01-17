import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getHomeGoodPriceData, getHomeHighScoreData } from '@/services'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchData',
  (_, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res))
    })
  }
)

type InitialState = {
  goodPriceInfo: any
  highScoreInfo: any
}

const initialState: InitialState = {
  goodPriceInfo: {},
  highScoreInfo: {}
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
    }
  }
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } =
  homeSlice.actions
export default homeSlice.reducer

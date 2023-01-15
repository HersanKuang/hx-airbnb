import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getHomeGoodPriceData } from '@/services'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchData',
  (_, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })
  }
)

type InitialState = {
  goodPriceInfo: any
}

const initialState: InitialState = {
  goodPriceInfo: {}
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer

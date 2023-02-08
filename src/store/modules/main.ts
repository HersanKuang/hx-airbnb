import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  headerConfig: {
    isFixed: boolean
    topAlpha: boolean
  }
}

const initialState: InitialState = {
  headerConfig: {
    isFixed: false,
    topAlpha: false
  }
}
const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer

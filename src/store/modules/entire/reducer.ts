import * as actionTypes from './constants'

type Action = { type: string } & typeof initialState
type InitialState = {
  currentPage?: number
  roomList?: any[]
  totalCount?: number
}

const initialState: InitialState = {
  currentPage: 1, // 当前页码
  roomList: [], // 房间列表
  totalCount: 0 // 房间总数
}
function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    default:
      return state
  }
}

export default reducer

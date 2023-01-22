import * as actionTypes from './constants'
import { getEntireRoomList } from '@/services/modules/entire'

export const changeCurrentPageAction = (currentPage: number) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList: any[]) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount: number) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const fetchRoomListAction = (): any => {
  return async (dispatch: any, getState: any) => {
    const currentPage = getState().entire.currentPage
    const res = await getEntireRoomList(currentPage * 20)
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }
}

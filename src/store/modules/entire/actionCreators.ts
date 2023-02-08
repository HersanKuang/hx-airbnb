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

export const changeIsLoadingAction = (isLoading: boolean) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = (page = 0): any => {
  return async (dispatch: any) => {
    // 1.修改currentPage
    dispatch(changeCurrentPageAction(page))

    // 2.根据页码获取最新的数据
    // const currentPage = getState().entire.currentPage
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(page * 20)
    dispatch(changeIsLoadingAction(false))

    // 3.获取到最新的数据，保存到redux的store中
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }
}

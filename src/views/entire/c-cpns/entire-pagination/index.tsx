import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Pagination } from '@mui/material'
import { PaginationWrapper } from '@/views/entire/c-cpns/entire-pagination/style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

interface IProps {
  children?: ReactNode
}

const EntirePagination: FC<IProps> = () => {
  const { totalCount, currentPage, roomList } = useAppSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList
    }),
    shallowEqualApp
  )
  const totalPage = Math.ceil(totalCount! / 20)
  const startCount = currentPage! * 20 + 1
  const endCount = (currentPage! + 1) * 20

  const dispatch = useAppDispatch()
  const pageChangeHandle = (
    event: React.ChangeEvent<unknown>,
    pageCount: number
  ) => {
    /** 回到顶部 */
    window.scrollTo(0, 0)
    /** 请求数据并更新页码 */
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      {!!roomList!.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第 {startCount} – {endCount} 个房源，共超过 {totalCount} 个
          </div>
          <div className="other">包含额外附加费用及适用税费。</div>
        </div>
      )}
    </PaginationWrapper>
  )
}

export default memo(EntirePagination)

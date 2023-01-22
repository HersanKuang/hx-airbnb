import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { EntireWrapper } from '@/views/entire/style'
import EntireFilter from '@/views/entire/c-cpns/entire-filter'
import EntireRooms from '@/views/entire/c-cpns/entire-rooms'
import EntirePagination from '@/views/entire/c-cpns/entire-pagination'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

interface IProps {
  children?: ReactNode
}

const Entire: FC<IProps> = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
}

export default memo(Entire)

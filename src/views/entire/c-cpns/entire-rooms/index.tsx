import React, { memo, useCallback } from 'react'
import type { FC, ReactNode } from 'react'
import { RoomsWrapper } from '@/views/entire/c-cpns/entire-rooms/style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

interface IProps {
  children?: ReactNode
}

const EntireRooms: FC<IProps> = () => {
  const { roomList, totalCount, isLoading } = useAppSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }),
    shallowEqualApp
  )

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const itemClickHandle = useCallback(
    (item: any) => {
      dispatch(changeDetailInfoAction(item))
      navigate('/detail')
    },
    [dispatch]
  )

  return (
    <RoomsWrapper>
      {roomList!.length > 0 && <h2 className="title">{totalCount}多处住宿</h2>}
      <div className="list">
        {roomList!.map((item) => (
          <RoomItem
            itemData={item}
            itemWidth="20%"
            itemClick={itemClickHandle}
            key={item._id}
          />
        ))}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  )
}

export default memo(EntireRooms)

import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import RoomItem from '@/components/room-item'
import { RoomsWrapper } from '@/components/area-rooms/style'

interface IProps {
  children?: ReactNode
  roomList: any[]
}

const AreaRooms: FC<IProps> = (props) => {
  const { roomList = [] } = props
  return (
    <RoomsWrapper>
      {roomList.slice(0, 8).map((item: any) => (
        <RoomItem itemData={item} key={item.id} />
      ))}
    </RoomsWrapper>
  )
}

export default memo(AreaRooms)

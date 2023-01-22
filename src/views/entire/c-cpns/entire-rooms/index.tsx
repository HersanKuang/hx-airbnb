import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RoomsWrapper } from '@/views/entire/c-cpns/entire-rooms/style'

interface IProps {
  children?: ReactNode
}

const EntireRooms: FC<IProps> = () => {
  return <RoomsWrapper>EntireRooms</RoomsWrapper>
}

export default memo(EntireRooms)

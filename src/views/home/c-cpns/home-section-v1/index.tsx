import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SectionV1Wrapper } from '@/views/home/c-cpns/home-section-v1/style'
import AreaHeader from '@/components/area-header'
import AreaRooms from '@/components/area-rooms'

interface IProps {
  children?: ReactNode
  title: string
  subtitle?: string
  roomList: any[]
  itemWidth?: string
}

const HomeSectionV1: FC<IProps> = (props) => {
  const { itemWidth, title, subtitle, roomList = [] } = props
  return (
    <SectionV1Wrapper>
      <AreaHeader title={title} subtitle={subtitle} />
      <AreaRooms roomList={roomList} itemWidth={itemWidth} />
    </SectionV1Wrapper>
  )
}

export default memo(HomeSectionV1)

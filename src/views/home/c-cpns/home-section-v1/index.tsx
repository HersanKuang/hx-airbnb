import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SectionV1Wrapper } from '@/views/home/c-cpns/home-section-v1/style'
import AreaHeader from '@/components/area-header'
import AreaRooms from '@/components/area-rooms'
import AreaFooter from '@/components/area-footer'

interface IProps {
  children?: ReactNode
  infoData: any
  itemWidth?: string
}

const HomeSectionV1: FC<IProps> = (props) => {
  const { infoData, itemWidth } = props
  return (
    <SectionV1Wrapper>
      <AreaHeader title={infoData.title} subtitle={infoData.subtitle} />
      <AreaRooms roomList={infoData.list} itemWidth={itemWidth} />
      <AreaFooter />
    </SectionV1Wrapper>
  )
}

export default memo(HomeSectionV1)

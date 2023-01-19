import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SectionV3Wrapper } from '@/views/home/c-cpns/home-section-v3/style'
import AreaHeader from '@/components/area-header'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import AreaFooter from '@/components/area-footer'

interface IProps {
  children?: ReactNode
  infoData: any
}

const HomeSectionV3: FC<IProps> = (props) => {
  const { infoData } = props
  return (
    <SectionV3Wrapper>
      <AreaHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="plus-room-list">
        <ScrollView>
          <div className="item">
            {infoData.list.map((item: any) => (
              <RoomItem itemData={item} itemWidth="20%" key={item.id} />
            ))}
          </div>
        </ScrollView>
      </div>
      <AreaFooter name="Plus" />
    </SectionV3Wrapper>
  )
}

export default memo(HomeSectionV3)

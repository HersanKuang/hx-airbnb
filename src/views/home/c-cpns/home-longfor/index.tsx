import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LongforWrapper } from '@/views/home/c-cpns/home-longfor/style'
import AreaHeader from '@/components/area-header'
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

interface IProps {
  children?: ReactNode
  infoData: any
}

const HomeLongfor: FC<IProps> = (props) => {
  const { infoData } = props
  return (
    <LongforWrapper>
      <AreaHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          <div className="item">
            {infoData.list.map((item: any, index: number) => (
              <LongforItem itemData={item} key={index} />
            ))}
          </div>
        </ScrollView>
      </div>
    </LongforWrapper>
  )
}

export default memo(HomeLongfor)

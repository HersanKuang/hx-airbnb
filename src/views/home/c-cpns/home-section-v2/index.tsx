import React, { memo, useCallback, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { SectionV2Wrapper } from '@/views/home/c-cpns/home-section-v2/style'
import AreaHeader from '@/components/area-header'
import AreaTabs from '@/components/area-tabs'
import AreaRooms from '@/components/area-rooms'
import AreaFooter from '@/components/area-footer'

interface IProps {
  children?: ReactNode
  infoData: any
}

const HomeSectionV2: FC<IProps> = (props) => {
  /** 从props获取数据 */
  const { infoData } = props
  /** 定义内部的state */
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  /** 对数据的处理 */
  const tabNames = infoData.dest_address.map((item: any) => item.name)
  /** 子组件传递数据 */
  const tabsClickHandle = useCallback(function (index: number, name: string) {
    setName(name)
  }, [])
  return (
    <SectionV2Wrapper>
      <AreaHeader title={infoData.title} subtitle={infoData.subtitle} />
      <AreaTabs tabNames={tabNames} tabClick={tabsClickHandle} />
      <AreaRooms roomList={infoData.dest_list[name]} itemWidth="33.3333%" />
      <AreaFooter name={name} />
    </SectionV2Wrapper>
  )
}

export default memo(HomeSectionV2)

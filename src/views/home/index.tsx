import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from '@/views/home/style'
import HomeBanner from '@/views/home/c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import HomeSectionV1 from '@/views/home/c-cpns/home-section-v1'
import AreaHeader from '@/components/area-header'
import AreaRooms from '@/components/area-rooms'
import AreaTabs from '@/components/area-tabs'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo } = useAppSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo
    }),
    shallowEqualApp
  )

  /** 对数据的处理 */
  const tabNames = discountInfo.dest_address?.map((item: any) => item.name)

  /** 派发异步事件：发送网络请求 */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣数据 */}
        <div className="discount">
          <AreaHeader
            title={discountInfo.title}
            subtitle={discountInfo.subtitle}
          />
          <AreaTabs tabNames={tabNames} />
          <AreaRooms
            roomList={discountInfo.dest_list?.['成都']}
            itemWidth="33.3333%"
          />
        </div>

        <HomeSectionV1
          title={goodPriceInfo.title}
          roomList={goodPriceInfo.list}
        />
        <HomeSectionV1
          title={highScoreInfo.title}
          subtitle={highScoreInfo.subtitle}
          roomList={highScoreInfo.list}
        />
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)

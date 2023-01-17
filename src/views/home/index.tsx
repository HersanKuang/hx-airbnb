import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from '@/views/home/style'
import HomeBanner from '@/views/home/c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import AreaHeader from '@/components/area-header'
import AreaRooms from '@/components/area-rooms'
import HomeSectionV1 from '@/views/home/c-cpns/home-section-v1'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo } = useAppSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo
    }),
    shallowEqualApp
  )

  /** 派发异步事件：发送网络请求 */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
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
